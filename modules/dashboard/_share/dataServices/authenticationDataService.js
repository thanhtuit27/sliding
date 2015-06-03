define([
    'core/service/commonDataService',
    'core/helper/appHelper'
], function (commonDataService, appHelper) {
    var dataService = {
        login: login
    };
    return dataService;

    function login(loginCommand) {
        var url=String.format("{0}/{1}",appHelper.getState().toJson().config.apiUrl, "accounts/login");
        return commonDataService.post(url,loginCommand);
    }
});