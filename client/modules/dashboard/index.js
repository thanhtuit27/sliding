angular.module('dashboard', ['ui.router', 'core']);
define([
		"modules/dashboard/_share/config/module",
		"modules/dashboard/_share/config/routes",
        "modules/dashboard/_share/config/directive"
], function (moduleConfig, routes) {
    var module = {
        name: "dashboard",
        init: init
    };
    return module;

    function init() {
        var def = ioc.resolve("Promise").create();
        var logger = ioc.resolve("ILogger");
        registerRoutes(moduleConfig, routes);
        def.resolve();
        return def;
    }

    function registerRoutes(moduleConfig, routes) {
        var dashboard = angular.module('dashboard');
        dashboard.config(function ($stateProvider, $urlRouterProvider) {
            
            routes.forEach(function (route) {
                $stateProvider.state(route.state, {
                    url: route.url,
                    templateUrl: route.template,
                    controller: route.controller,
                    controllerAs: 'vm'
                })
            });
        }).run(['$rootScope', '$state', function ($rootScope, $state) {
            $state.go(moduleConfig.defaultUrl);
            window.router = $state;
        }]);
    }
});