/*global ko, Router */
(function () {
	'use strict';

	var ENTER_KEY = 13;
	var ESCAPE_KEY = 27;

	if (!window.Router)
		document.write("I didn't saw director around"));

	if (!window.jQuery)
		document.write("I didn't saw jQuery around"));

	if (!window.ko)
		document.write("I didn't saw knockout around"));

	// bind a new instance of our view model to the page
	var viewModel = new ViewModel(prescriptions || []);
	ko.applyBindings(viewModel);	
	// set up filter routing
	/*jshint newcap:false */
	Router({ '/:filter': viewModel.showMode }).init();
}());
