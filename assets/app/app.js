/*global ko, Router */
(function () {
	'use strict';

	var ENTER_KEY = 13;
	var ESCAPE_KEY = 27;

	// A factory function we can use to create binding handlers for specific
	// keycodes.
	function keyhandlerBindingFactory(keyCode) {
		return {
			init: function (element, valueAccessor, allBindingsAccessor, data, bindingContext) {
				var wrappedHandler, newValueAccessor;

				// wrap the handler with a check for the enter key
				wrappedHandler = function (data, event) {
					if (event.keyCode === keyCode) {
						valueAccessor().call(this, data, event);
					}
				};

				// create a valueAccessor with the options that we would want to pass to the event binding
				newValueAccessor = function () {
					return {
						keyup: wrappedHandler
					};
				};

				// call the real event binding's init function
				ko.bindingHandlers.event.init(element, newValueAccessor, allBindingsAccessor, data, bindingContext);
			}
		};
	}

	// a custom binding to handle the enter key
	ko.bindingHandlers.enterKey = keyhandlerBindingFactory(ENTER_KEY);

	// another custom binding, this time to handle the escape key
	ko.bindingHandlers.escapeKey = keyhandlerBindingFactory(ESCAPE_KEY);



	// wrapper to hasFocus that also selects text and applies focus async
	ko.bindingHandlers.selectAndFocus = {
		init: function (element, valueAccessor, allBindingsAccessor, bindingContext) {
			ko.bindingHandlers.hasFocus.init(element, valueAccessor, allBindingsAccessor, bindingContext);
			ko.utils.registerEventHandler(element, 'focus', function () {
				element.focus();
			});
		},
		update: function (element, valueAccessor) {
			ko.utils.unwrapObservable(valueAccessor()); // for dependency
			// ensure that element is visible before trying to focus
			setTimeout(function () {
				ko.bindingHandlers.hasFocus.update(element, valueAccessor);
			}, 0);
		}
	};


	var Medicine = function (dci, name, form, dose, timeofday){
		this.dci = ko.observable(dci);
		this.name = ko.observable(name);
		this.form = ko.observable(form);
		this.dose = ko.observable(dose);
		this.timeofday = ko.observable(timeofday);

		this.editing = ko.observable(false);

		this.toString = function() {
	        return this.name + ' ' + this.form + ' ' + this.dose + ' ' + this.timeofday;
	    };
	}


	// our main view model
	var ViewModel = function (prescription) {
		// map array of passed in todos to an observableArray of Todo objects
		this.prescriptions = ko.observableArray(prescription.map(function (medicine) {
			return new Medicine(medicine.dci, medicine.name, medicine.form, medicine.dose, medicine.timeofday);
		}));

		// store the new todo value being entered
		this.current = ko.observable();

		this.showMode = ko.observable('all');

		this.filteredPrescriptions = ko.computed(function () {
			switch (this.showMode()) {
				case 'jejum':
				case 'manha':
				case 'almoco':
				case 'jantar':
					return this.prescriptions().filter(function (medicine) {
						return this.timeofday == this.showMode();
					});
				default:
					return this.prescriptions();
			}
		}.bind(this));


		// add a new todo, when enter key is pressed
		this.add = function () {
			var current = this.current().trim();
			if (current) {
				this.prescriptions.push(new Medicine(current));
				this.current('');
			}
		}.bind(this);

		// remove a single todo
		this.remove = function (medicine) {
			this.prescription.remove(medicine);
		}.bind(this);

		// edit an item
		this.editItem = function (item) {
			item.editing(true);
			item.previousDci = item.dci();
			item.previousName = item.name();
			item.previousForm = item.form();
			item.previousDose = item.dode();
			item.previousTimeofday = item.timeofday();
		}.bind(this);

		// stop editing an item.  Remove the item, if it is now empty
		this.saveEditing = function (item) {
			item.editing(false);

			var dci = item.dci();
			var name = item.name();
			var form = item.form();
			var dose = item.dci();
			var timeofday = item.dci();


			var trimmeddci = item.dci().trim();
			var trimmedname = item.name().trim();
			var trimmedform = item.form().trim();
			var trimmeddose = item.dose().trim();
			var trimmedtimeofday = item.timeofday().trim();

			// Observable value changes are not triggered if they're consisting of whitespaces only
			// Therefore we've to compare untrimmed version with a trimmed one to chech whether anything changed
			// And if yes, we've to set the new value manually
			if (dci !== trimmeddci) {
				item.dci(trimmeddci);
			}

			if (name !== trimmedname) {
				item.name(trimmedname);
			}
			if (form !== trimmedform) {
				item.form(trimmedform);
			}
			if (dose !== trimmeddose) {
				item.dose(trimmeddose);
			}
			if (timeofday !== trimmedtimeofday) {
				item.timeofday(trimmedtimeofday);
			}

			if (!trimmeddci) && (!trimmedname) && (!trimmedform) && (!trimmeddose) && (!trimmedtimeofday){
				this.remove(item);
			}
		}.bind(this);

		// cancel editing an item and revert to the previous content
		this.cancelEditing = function (item) {
			item.editing(false);
			item.dci(item.previousDci);
			item.name(item.name);
			item.form(item.form);
			item.dose(item.dose);
			item.timeofday(item.timeofday);
		}.bind(this);

		// count of all completed todos
		this.jejumCount = ko.computed(function () {
			return this.prescriptions().filter(function (medicine) {
				return medicine.timeofday() == 'jejum';
			}).length;
		}.bind(this));

		this.peqalmocoCount = ko.computed(function () {
			return this.prescriptions().filter(function (medicine) {
				return medicine.timeofday() == 'peqalmoco';
			}).length;
		}.bind(this));

		this.almocoCount = ko.computed(function () {
			return this.prescriptions().filter(function (medicine) {
				return medicine.timeofday() == 'almoco';
			}).length;
		}.bind(this));

		this.jantarCount = ko.computed(function () {
			return this.prescriptions().filter(function (medicine) {
				return medicine.timeofday() == 'jantar';
			}).length;
		}.bind(this));

		this.allCount = ko.computed(function () {
			return this.prescriptions().length;
		}.bind(this));

		// count of todos that are not complete
		/*this.remainingCount = ko.computed(function () {
			return this.todos().length - this.completedCount();
		}.bind(this));*/

		// writeable computed observable to handle marking all complete/incomplete
		/*this.allCompleted = ko.computed({
			//always return true/false based on the done flag of all todos
			read: function () {
				return !this.remainingCount();
			}.bind(this),
			// set all todos to the written value (true/false)
			write: function (newValue) {
				this.todos().forEach(function (todo) {
					// set even if value is the same, as subscribers are not notified in that case
					todo.completed(newValue);
				});
			}.bind(this)
		});*/

		// helper function to keep expressions out of markup
		this.getLabel = function (count) {
			return ko.utils.unwrapObservable(count) === 1 ? 'medicamento' : 'medicamentos';
		}.bind(this);

		// internal computed observable that fires whenever anything changes in our todos
		ko.computed(function () {
			// store a clean copy to local storage, which also creates a dependency on the observableArray and all observables in each item
			//localStorage.setItem('todos-knockoutjs', ko.toJSON(this.todos));
			if (client.isAuthenticated()) {
			    // Client is authenticated. Display UI.
		     	client.writeFile('datastorage.json', ko.toJSON(this.prescriptions), function (error) {
	                if (error) {
	                    alert('Error: ' + error);
	                } else {
	                    alert('File written successfully!');
	                }
	            });
			}else{
				alert('Client is not authenticated');
			}
		}.bind(this)).extend({
			rateLimit: { timeout: 500, method: 'notifyWhenChangesStop' }
		}); // save at most twice per second
	};

	var prescriptions; 
	
	function doLogin(){
		// check local storage for todos
		//var prescriptions = ko.utils.parseJson(localStorage.getItem('todos-knockoutjs'));
		
		$.ajax({
			dataType: "json",
			url: "datastorage.json",
			async: false,
			success: function(data){
				console.log(json); // this will show the info it in firebug console
				prescriptions = ko.utils.parseJson(json);
			}
		});
		
		//DROPBOX code: https://www.dropbox.com/developers/datastore/tutorial/js
		// Try to finish OAuth authorization.
		client.authenticate({interactive: true}, function (error) {
		    if (error) {
		        alert('Authentication error: ' + error);
		    }
		});

		if (client.isAuthenticated){
			$.ajax({
				dataType: "json",
				url: "datastorage.json",
				async: false,
				success: function(data){
					console.log(json); // this will show the info it in firebug console
					prescriptions = ko.utils.parseJson(json);
				}
			});

			this.dropboxIsAuthenticated =  ko.observable(client.isAuthenticated);
			$("#todoapp").show( "slow" );
		}
	}


	// bind a new instance of our view model to the page
	var viewModel = new ViewModel(prescriptions || []);
	ko.applyBindings(viewModel);	
	// set up filter routing
	/*jshint newcap:false */
	Router({ '/:filter': viewModel.showMode }).init();
}());
