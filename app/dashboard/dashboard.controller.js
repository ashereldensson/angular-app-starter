(function () {
	"use strict";

	angular
		.module('app.dashboard')
		.controller('DashboardController', DashboardController);
	
	// Inject
	DashboardController.$inject = [];
	
	function DashboardController() {
		var vm = this;
	}
}());
