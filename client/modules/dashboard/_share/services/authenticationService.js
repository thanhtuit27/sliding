define([
    'modules/dashboard/_share/dataServices/authenticationDataService',
    'core/helper/appHelper'
], function (authenticationDataService, appHelper) {
    var service = {
        login:login
    };
    return service;

    function login(loginCommand) {
        
        var def = ioc.resolve("Promise").create();
        authenticationDataService.login(loginCommand)
            .success(function (response) {
                var appState = appHelper.getState();
                appState.setAuthentication(response.authentication);
                appState.setUserInfo(response.userInfo);
                appHelper.setState(appState);

                def.resolve();
            })
            .fail(function (error, result) {
                def.reject(error, result);
            });
        return def;
    }
});