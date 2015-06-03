define(function () {
    var helper = {
        isSuccessStatus: isSuccessStatus,
        createPOSTRequest: createPOSTRequest
    };
    return helper;
    function createPOSTRequest(url, data) {
        var options = {
            type: "POST",
            url: url,
            data: JSON.stringify(data),
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            }
        };
        return options;
    }
    function isSuccessStatus(status) {
        return status == 200;
    }
});