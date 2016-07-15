(function (window) {
	// This is the environment configuration file
	// You can modify, delete, or add to this file to match your development or production environment
	
	window.__env = window.__env || {};

	// API URL
	//window.__env.apiUrl = 'http://your-api.com';
	window.__env.apiUrl = 'data/';
	
	// API version
	window.__env.apiVer = 'v1';

	// Application base URL
	window.__env.baseUrl = '/';

	// Environment is either development or production
	window.__env.env = 'dev';
	
}(this));