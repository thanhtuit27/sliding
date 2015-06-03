define([
    'core/service/commonDataService',
    'core/helper/appHelper'
], function (commonDataService, appHelper) {
    var dataService = {
        createAccount: createAccount
    };
    return dataService;

    function createAccount(account) {
        var url = String.format("{0}/{1}", appHelper.getState().toJson().config.apiUrl, "accounts");
        return commonDataService.post(url, account);
    }
});