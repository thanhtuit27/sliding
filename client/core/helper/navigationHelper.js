define([
    'core/helper/appHelper'
], function (appHelper) {
    var helper = {
        resolve: resolve
    };
    return helper;

    function resolve(url) {
        var state = appHelper.getState();
        var url = String.format("{0}.{1}", state.config.layout, url);
        return url;
    }
});