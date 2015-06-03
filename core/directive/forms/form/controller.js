define([
    "share/model/collection/hash",
    "core/helper/form/formValidationHelper"
], function (hashFactory, formValidationHelper) {
	    angular.module('core').directive('formControl', function () {
	        return {
	            restrict: 'E',
	            transclude: true,
	            controller: function ($scope) {
	                var vm = this;
	                angular.extend(vm, $scope);
	                vm.controls = hashFactory.create();
	                vm.addControl = addControl;
	                vm.getControl = getControl;
	                vm.isValid = isValid;
	                vm.validate = validate;
	                vm.onActionButtonClicked = onActionButtonClicked;
	                vm.onValidationFail = System.emptyFn;

	                function onActionButtonClicked(buttonId) {
	                    if (!vm.isValid()) {
	                        vm.onValidationFail(vm.controls.toArray().where(function (control) { return control.isInvalid(); }));
	                        return;
	                    }
	                    var clickedButton = vm.controls.get(buttonId);
	                    if (clickedButton.onActionButtonClickedCallback) {
	                        clickedButton.onActionButtonClickedCallback(vm);
	                    }
	                }

	                /*function isValid() {
	                    return !vm.validate();
	                }*/
	                function validate() {
	                    if (!vm.isValid()) {
	                        vm.onValidationFail(vm.controls.toArray().where(function (control) { return control.isInvalid(); }));
	                        return false;
	                    }
	                    return true;
	                    //var clickedButton = vm.controls.get(buttonId);
	                    //if (clickedButton.onClick()) {
	                    //    clickedButton.onClick()(vm);
	                    //}
	                }
	                function isValid() {
	                    var numberOfInvalidControl = 0;
	                    var listOfControls = vm.controls.toArray();
	                    for (var controlIndex = 0; controlIndex < listOfControls.length; controlIndex++) {
	                        numberOfInvalidControl += formValidationHelper.isValid(listOfControls[controlIndex]) ? 0 : 1;
	                    }
	                    return numberOfInvalidControl <= 0;
	                }

	                function addControl(control) {
	                    vm.controls.add(control.id, control);
	                }
	                function getControl(control) {
	                    return vm.controls.get(control.id);
	                }
	            },
	            controllerAs: "vm",
	            templateUrl: 'core/directive/forms/form/view.html',
	            link: function ($scope, element, attrs) {
	                
	            }
	        };
	    });
	});