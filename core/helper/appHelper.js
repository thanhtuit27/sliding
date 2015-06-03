define([
    'core/model/app/appState'
], function (appStateFactory) {
    var logger;
	var appState = null;
	var helper={
	    setState: setState,
	    getState: getState,
	    loadState: loadState,
	    saveState: saveState
	};
	return helper;

	function saveState() {
	    var storage = ioc.resolve("ILocalStore");
	    var state = appState.toJson();
	    storage.set(state.config.appKey, state);
	}
	function loadState() {
	    var storage = ioc.resolve("ILocalStore");
	    var appKey = appState.toJson().config.appKey;
	    var previousState = storage.get(appKey) || {};
        appState.fromJson(previousState)
	}
	function getState() {
	    if (appState == null) {
	        appState = appStateFactory.create();
	    }
	    return appState;
	}
	    /*
        {authentication, userInfo}
        */
	function setState(state) {
	    appState.setAuthentication(state.authentication);
	    appState.setUserInfo(state.userInfo);
	}
   
});