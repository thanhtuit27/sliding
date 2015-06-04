define([
    'core/helper/appHelper'
], function (appHelper) {
    var helper = {
        isAuthenticated: isAuthenticated
    };
    return helper;

    function isAuthenticated() {
        var appState = appHelper.getState();
        if (!appState.authentication || String.isNullOrWhiteSpace(appState.authentication.token)) {
            return false;
        }
        if (!appState.authentication || !appState.authentication.expiredAfter || (new Date(Date.parse(appState.authentication.expiredAfter)) < Date.current())) {
            return false;
        }
        return true;
    }
});