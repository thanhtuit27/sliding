define([
    'modules/dashboard/_share/dataServices/accountDataService'
], function (dataService) {
    var service = {
        createAccount: createAccount
    };
    return service;

    function createAccount(accountModel) {
        return dataService.createAccount(accountModel);
    }
});