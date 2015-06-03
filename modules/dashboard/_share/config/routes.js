define([
        "modules/dashboard/index/controller",
	],function(){
	var route=getRoutes();
	return route;

	function getRoutes(){
	    var routes = [
	        { state: "index", url: "/index", template: "modules/dashboard/index/view.html", controller: "indexController" },
		];
		return routes;
	}
});