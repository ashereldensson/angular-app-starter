(function () {
	"use strict";

	// Environment object
	var __env = {};

	initEnv();

	angular
		.module('app.core')
		// Register environment as constant	
		.constant('__env', __env)
		// Configuration
		.config(['$urlRouterProvider', config])
		// Run
		.run(['$state', 'stateWatcherService', run]);


	function config($urlRouterProvider) {
		// Routing
		$urlRouterProvider.otherwise('/dashboard');
	}

	function run($state, stateWatcherService) {
		// trigger the ui-router
	}

	function initEnv() {
		// Import variables if present (from env.js)
		if (window) {
			Object.assign(__env, window.__env);
		}
	}
}());