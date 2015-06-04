/*
This will manuplate data (set to/get from) roaming storage of window phone.
Please do not use this for other application
*/
define(function () {
    var storage = Windows.Storage.ApplicationData.current.roamingSettings
    var helper = {
        get: get,
        set: set,
        remove: remove
    };
    return helper;
    function remove(key) {
        delete storage.values[key];
    }
    function set(key, data) {
        var dataStr = JSON.stringify(data);
        storage.values[key] = dataStr;
    }
    function get(key) {
        var str = storage.values[key];
        if (String.isNullOrWhiteSpace(str)) {
            return String.empty;
        }
        return JSON.parse(str);
    }
});