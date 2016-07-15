(function () {
	"use strict";

	angular
		.module('app.users')
		.controller('UserDetailsController', UserDetailsController);

	// Inject
	UserDetailsController.$inject = ['initData'];

	function UserDetailsController(initData) {
		var vm = this;

		vm.userDetails = {};

		init();

		/////////////////////////////

		function init() {
			vm.userDetails = initData;
		}

	}
}());