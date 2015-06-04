define([
    'core/helper/guidHelper'
], function (guidHelper) {
    angular.module('core').directive('buttonControl', function () {
	        return {
	            restrict: 'E',
                //require:['^formControl'],
	            //transclude: true,
	            scope: {
                    id:"@",
                    label: "@",
                    onClick:"&"
	            },
	           /* controller: function ($scope) {
	            },
	            controllerAs: "vm",*/
	            templateUrl: 'core/directive/forms/button/view.html',
	            link: function ($scope, element, attrs, controllers) {
	                if (String.isNullOrWhiteSpace($scope.id)) {
	                    $scope.id = String.format("button_{0}", guidHelper.newGuid());
	                }
	                $scope.onButtonClicked = onButtonClicked;
                    
	                element[0].onclick= function () {
	                    console.log("dsfsdfsdfs");
	                };
	               // $scope.onActionButtonClickedCallback = onActionButtonClickedCallback;

	                //var formController = controllers[0];
	                //formController.addControl($scope);

	                function onButtonClicked() {
	                    //if (!formController.validate()) { return;}
	                    $scope.onClick();
	                    //formController.onActionButtonClicked($scope.id);
	                }
	                function onActionButtonClickedCallback() {
	                    $scope.onClick(formController);
	                }
	            }
	        };
	    });
	});