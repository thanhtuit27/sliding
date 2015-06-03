define([
    "core/helper/logging/defaultlogger",
    "core/model/promise",
], function() {
    var iocItems = [
        { type: 'ILogger', instanceOf: "core/helper/logging/defaultlogger", params:{appMode:'debug'}},
        { type: 'Promise', instanceOf: "core/model/promise" },
    ];
    return iocItems;
});
