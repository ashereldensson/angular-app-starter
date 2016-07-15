(function () {
	"use strict";

	angular
		.module('app.users')
		.controller('UsersController', UsersController);

	// Inject
	UsersController.$inject = ['initData'];

	function UsersController(initData) {
		var vm = this;

		vm.users = [];

		init();

		/////////////////////////////

		function init() {
			vm.users = initData;
		}

	}
}());