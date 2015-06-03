define([
    'core/helper/uiHelper',
    'libs/toastr/toastr',
    "share/model/enums"
], function (uiHelper, toastr,enums) {
    var console = toastr;
    var logger = {
        info: info,
        error: error,
        warn: warn,
        injectConstructor: injectConstructor
    };
    return logger;

    function injectConstructor(params) {
        appMode = params.appMode;
        uiHelper.addCss("/libs/toastr/toastr.css");
        console.options = {
            "closeButton": false,
            "debug": true,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-full-width",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "3000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
    }
    function info() {
        if (appMode == enums.appMode.release) { return; }
        var strToWrite = convertToString(arguments);
        console.info(strToWrite);
    }

    function error() {
        if (appMode == enums.appMode.release) { return; }
        var strToWrite = convertToString(arguments);
        console.error(strToWrite);
    }

    function warn() {
        if (appMode == enums.appMode.release) { return; }
        var strToWrite = convertToString(arguments);
        console.warning(strToWrite);
    }

    function convertToString(args) {
        var str = String.format(args);
        return str;
    }
});