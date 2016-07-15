(function () {
	"use strict";

	angular
		.module('app.users')
		.config(['$stateProvider', config]);

	function config($stateProvider) {
		$stateProvider
			.state('users', {
				url: '/users',
				views: {
					'content': {
						templateUrl: 'app/users/users.html',
						controller: 'UsersController',
						controllerAs: 'vm',
						resolve: {
							initData: ['dataService', function (dataService) {
								return dataService.getUsers();
							}]
						}
					}
				}
			})
			.state('user-details', {
				url: '/user/:id',
				views: {
					'content': {
						templateUrl: 'app/users/user-details.html',
						controller: 'UserDetailsController',
						controllerAs: 'vm',
						resolve: {
							initData: ['dataService', '$stateParams', function (dataService, $stateParams) {
								return dataService.getUserDetails($stateParams.id);
						}]
						}
					}
				}
			});
	}

}());