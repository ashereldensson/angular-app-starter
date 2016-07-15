(function() {
	"use strict";

	// State Watcher is a service that helps while debugging state's related errors
	
	angular
		.module('app.core')
		.factory('stateWatcherService', stateWatcherService);

	stateWatcherService.$inject = ['$rootScope'];

	function stateWatcherService ($rootScope) {
		$rootScope.$on('$stateChangeStart', stateChangeStart);
		$rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
		$rootScope.$on('$stateChangeError', stateChangeError);
		$rootScope.$on('$stateNotFound', stateNotFound);

		return {};

		function stateChangeStart (event, toState, toParams, fromState, fromParams) {
			console.log('State Change Start:', event, toState, toParams, fromState, fromParams);
		}

		function stateChangeSuccess (event, toState, toParams, fromState, fromParams) {
			console.info('State Change Success:', event, toState, toParams, fromState, fromParams);
		}

		function stateChangeError (event, toState, toParams, fromState, fromParams) {
			console.error('State Change Error:', event, toState, toParams, fromState, fromParams);
		}

		function stateNotFound (event, toState, toParams, fromState, fromParams) {
			console.warn('State Not Found:', event, toState, toParams, fromState, fromParams);
		}
	}
}());