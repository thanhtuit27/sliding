define(function(){
	var helper={
		newGuid:newGuid
	};
	return helper;

	function newGuid(){
		function S4() {
		    return (((1+Math.random())*0x10000)|0).toString(16).substr(1); 
		}
 		var guid = (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
 		return guid;
	}
});