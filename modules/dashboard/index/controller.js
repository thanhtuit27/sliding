define([
    "modules/dashboard/_share/services/slideService",
    "modules/dashboard/index/articleModel",
    "modules/dashboard/index/slideModel",
], function (slideService, articleModel, slideFactory) {
    angular.module("dashboard").controller('indexController', Controller);

    Controller.$inject = ['$scope', '$state'];

    function Controller($scope, $state) {
        var vm = this;
        vm.model = articleModel.create();
        vm.model.current = slideFactory.create();
        vm.onInitialized = onInitialized;
        vm.onInitialized();


        function onInitialized() {
            slideService.getAllByArticleId(1).then(function (slides) {
                vm.model.importSlides(slides);
                vm.model.current = vm.model.slides[0];
            });

            
            /*Just hack for now*/
            window.setTimeout(function () {
                initSlider();
                initEditor();
            }, 1000);
        }

        function initEditor() {
            var elementes = $("section div.header");
            elementes.each(function (index, element) {
                CKEDITOR.inline(element, {
                    toolbarGroups: [
                        { name: 'paragraph', groups: ['align', 'sliding'] }
                    ]
                });
            });

            for (var index in CKEDITOR.instances) {
                CKEDITOR.instances[index].on('change', function () {
                    var element = arguments[0].editor.element.$;
                    var value = element.innerText;
                    System.setAngularValue(angular.element(element), value);
                });
            }
        }
        
        function initSlider() {
            
            Reveal.addEventListener('slidechanged', function (event) {
                onSlideChanged(event);
            });

            Reveal.initialize({
                controls: true,
                progress: true,
                history: true,
                center: true,
                rolling_links: true,
                theme: Reveal.getQueryHash().theme,
                transition: Reveal.getQueryHash().transition || 'linear',
                dependencies: [
                    { src: '/lib/js/classList.js', condition: function () { return !document.body.classList; } },
                    { src: '/plugin/markdown/marked.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
                    { src: '/plugin/markdown/markdown.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
                    { src: '/plugin/highlight/highlight.js', async: true, callback: function () { hljs.initHighlightingOnLoad(); } },
                    { src: '/plugin/zoom-js/zoom.js', async: true, condition: function () { return !!document.body.classList; } },
                    { src: '/plugin/notes/notes.js', async: true, condition: function () { return !!document.body.classList; } }
                ]
            });
            
        }
        function onSlideChanged(event) {
            var currentSlideId = getCurrentSlideId(event); 
            var currentSlide = vm.model.getSlide(currentSlideId);
            vm.model.current = currentSlide;
        }

        function getCurrentSlideId(event) {
            return event.currentSlide.attributes["slideid"].value;
        }
    }
});