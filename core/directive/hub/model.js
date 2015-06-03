define([
    "share/model/collection/hash"
], function (hashFactory) {
    var factory = {
        create:create
    };
    return factory;

    function create() {
        return new Model();
        function Model() {
            var vm = this;
            vm.sections = hashFactory.create();
            vm.getSections = getSection;

            function getSection() {
                return this.sections.toArray();
            }
        }
    }
});