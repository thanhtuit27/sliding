requirejs.config({
    baseUrl: '/',
    paths: {
        share: 'core',
        jquery: "libs/jquery/jquery-2.1.4"
    }
});

define([
		'core/helper/configurationHelper'
], function (configHelper) {

    window.ioc = configHelper.configIoC();
    window.logger = ioc.resolve("ILogger");

    var defaultModule = "modules/dashboard/index";
    require([/*'layouts/index', */defaultModule], function (module) {
        module.init().then(function () {
            angular.element(document).ready(function () {
                angular.bootstrap(document, [module.name]);
            });
        });
    });
});