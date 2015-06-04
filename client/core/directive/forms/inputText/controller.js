define([
    'core/helper/guidHelper'
], function (guidHelper) {
    angular.module('core').directive('inputControl', function () {
	        return {
	            restrict: 'E',
	            require: ['^formControl'],
	            scope: {
                    id:"@",
	                label: "@",
	                value: "="
	            },
	            templateUrl: 'core/directive/forms/inputText/view.html',
	            link: function ($scope, element, attrs, controllers) {
	                console.log("Link in formInputText ne");
	                if (String.isNullOrWhiteSpace($scope.id)) {
	                    $scope.id = String.format("textinput_{0}", guidHelper.newGuid());
	                }
	                var formController = controllers[0];
	                formController.addControl($scope);
	            }
	        };
	    });
	});