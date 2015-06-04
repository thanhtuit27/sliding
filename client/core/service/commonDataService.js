define([
    'core/helper/httpHelper'
], function (httpHelper) {
    var dataService = {
        post: post
    };
    return dataService;

    function post(url, data) {
        var def = ioc.resolve("Promise").create();
        var options = httpHelper.createPOSTRequest(url, data);
        WinJS.xhr(options).done(
            function completed(response) {
                var data = JSON.parse(response.responseText);
                if (httpHelper.isSuccessStatus(data.status)) {
                    def.resolve(data.data);
                    return;
                }
                def.reject(data.errors, data.data);
            },
            function error(response) {
                var data = JSON.parse(response.responseText);
                def.reject(data.errors, data.data);
            });
        return def;
    }
});