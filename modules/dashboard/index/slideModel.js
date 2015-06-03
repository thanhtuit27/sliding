define(function () {
    var factory = {
        create:create
    };
    return factory;


    function create(slideDataItem) {
        return new Slide(slideDataItem);


        function Slide(dataItem) {
            var vm = this;
            vm.header = String.empty;
            vm.subHeader = String.empty;
            vm.id = String.empty;
            vm.slides = [];
            vm.loadDataFrom = loadDataFrom;

            if (dataItem) {
                vm.loadDataFrom(dataItem);
            }

            function loadDataFrom(dataItem) {
                vm.id = dataItem.id;
                vm.header = dataItem.header;
                vm.subHeader = dataItem.subHeader;
                if (dataItem.slides && dataItem.slides.length > 0) {
                    dataItem.slides.forEach(function (subSlide) {
                        vm.slides.push(new Slide(subSlide));
                    });
                }
            }
        }
    }
});