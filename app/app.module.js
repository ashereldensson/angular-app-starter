(function () {
    "use strict";
    angular
        .module('app', [
            /* AngularJS Modules */
            // ngMessages, ngAnimate, ngSanitize...
			
            /* Third Party Modules */
			// ui.router, ui.bootstrap, ng-toast...
            'ui.router',

            /* Application Modules */
            //app.core, app.dashboard, app.users...
			'app.core',
			'app.dashboard',
			'app.users'
        ]);

}());