(function () {
	"use strict";

	angular
		.module('app.dashboard')
		.config(['$stateProvider', config]);

	function config($stateProvider) {
		$stateProvider
			.state('dashboard', {
				url: '/dashboard',
				views: {
					'content': {
						templateUrl: 'app/dashboard/dashboard.html',
						controller: 'DashboardController',
						controllerAs: 'vm'
					}
				}
			});
	}

}());