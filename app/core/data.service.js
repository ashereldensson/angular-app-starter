(function () {
	"use strict";

	angular
		.module('app.core')
		.factory('dataService', dataService);

	dataService.$inject = ['__env', '$http'];

	function dataService(__env, $http) {
		
		return {
			getUsers: getUsers,
			getUserDetails: getUserDetails
		};

		///////////////////////////
		
		function getUsers() {			
			return $http({
				method: 'GET',
				url: __env.apiUrl + 'users.json'
			})
				.then(getUsersComplete, getUsersError)
				.catch(getUsersError);

			function getUsersComplete(response) {
				return response.data;
			}

			function getUsersError(error) {
				console.error('XHR Failed for getUsers:', error.data);
			}
		}

		function getUserDetails(id) {
			return $http({
				method: 'GET',
				url: __env.apiUrl + 'user' + id + '.json'
			})
				.then(getUserDetailsComplete, getUserDetailsError)
				.catch(getUserDetailsError);

			function getUserDetailsComplete(response) {
				return response.data;
			}

			function getUserDetailsError(error) {
				console.error('XHR Failed for getUserDetails:', error.data);
			}
		}
	}
}());