define(function () {
    angular.module('dashboard').directive('slideDetail', ["$compile", function ($compile) {
	        return {
	            restrict: 'EA',
	            scope: {
	                model:"="
	            },
	            replace: true,
	            transclude: true,
	            controller: function ($scope) {
	                var vm = this;
	                angular.extend(vm, $scope);
	                vm.hasSubSlide = hasSubSlide;
	                function hasSubSlide() {
	                    return vm.model && vm.model.slides && (vm.model.slides.length > 0);
	                }
	            },
	            controllerAs: "vm",
	            template: "<section></section>",
	            link: function (scope, element, attrs) {
	                var content = getItemTemplateContent(scope);
	                if (scope.vm.hasSubSlide()) {
	                    content = String.format("<{0} slideId={2}>{1}</{0}>", "section", content, scope.vm.model.id);
	                    var subHtml = "<slide-detail ng-repeat='sub in vm.model.slides' model='sub'></slide-detail>";
	                    content=String.format("{0}{1}", content, subHtml)
	                }
	                element.attr("slideId", scope.vm.model.id);
	                element.append(content);
	                $compile(element.contents())(scope);
	                scope.$watch('vm.model.header', function (newValue, oldValue) {
	                    $(element).find(".header").first().html(newValue);
	                });
                }
	        };

	        function getItemTemplateContent(name) {
	            return "<div class=\"header\" ng-model=\"vm.model.header\" contenteditable=\"true\">{{vm.model.header}}</div><div contenteditable=\"true\" class=\"sub-header\">{{vm.model.subHeader}}</div>";
	        }
	    }]);
	});