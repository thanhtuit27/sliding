define([
    "modules/dashboard/index/slideModel"
], function (slideFactory) {
    var factory = {
        create:create
    };
    return factory;

    function create() {
        return new Article();
        function Article() {
            var vm = this;
            vm.slides = [];
            vm.importSlides = importSlides;
            vm.getSlide = getSlide;

            function getSlide(slideId) {
                var searchedSlide = searchFromSlideItem(slideId, vm.slides);
                return searchedSlide;
            }

            function searchFromSlideItem(slideId, slides) {
                for (var slideIndex = 0; slideIndex < slides.length; slideIndex++) {
                    var item = slides[slideIndex];
                    if (item.id === slideId) {
                        return item;
                    }
                    var item = searchFromSlideItem(slideId, item.slides);
                    if (item) {
                        return item;
                    }
                }
                return null;
            }

            function importSlides(importedSlides) {
                vm.slides = [];
                if (!importedSlides) { return; }
                importedSlides.forEach(function (item) {
                    vm.slides.push(slideFactory.create(item));
                });
            }
        }
    }
});