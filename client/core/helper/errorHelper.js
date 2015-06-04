define(function () {
    var helper = {
        getErrorMessage: getErrorMessage
    };
    return helper;

    function getErrorMessage(errors) {
        var message = errors[0].message;
        for (var errorIndex = 1; errorIndex < errors.length; errorIndex++) {
            message = String.format("{0}<br/>{1}", message, errors[errorIndex].message);
        }
        return message;
    }
});