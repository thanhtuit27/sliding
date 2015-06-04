define([
    'core/helper/guidHelper',
    "core/directive/hub/model"
], function (guidHelper, hubModelFactory) {
    angular.module('core').directive('hub', function () {
	        return {
	            restrict: 'E',
	            scope: {
	                orientation:"@"
	            },
	            transclude: true,
	            controller: function ($scope) {
	                var vm = this;
	                angular.extend(vm, $scope);
	                vm.model = hubModelFactory.create();
	                vm.addSection = addSection;
	                function addSection(section) {
	                    vm.model.sections.add(section.id, section);
	                }
	            },
	            controllerAs: "vm",
	            templateUrl: 'core/directive/hub/view.html',
	            /*link: function ($scope, element, attrs, controllers) {
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
	            }*/
	        };
	    });
	});