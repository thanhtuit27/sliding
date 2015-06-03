define([
    'core/helper/guidHelper'
], function (guidHelper) {
    angular.module('core').directive('hubSection', function () {
	        return {
	            restrict: 'E',
	            require: ['^hub'],
	            transclude: true,
	            scope: {
                    id:"@",
	                header: "@"
	            },
	            templateUrl: 'core/directive/hubSection/view.html',
	            link: function ($scope, element, attrs, hubControllers) {
	                $scope.id = $scope.id || String.format("hubSection_{0}", guidHelper.newGuid());
	                var hubController = hubControllers[0];
	                hubController.addSection($scope);
	            }
	        };
	    });
	});