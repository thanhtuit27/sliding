define(function () {
    var service = {
        getAllByArticleId: getAllByArticleId
    };
    return service;

    function getAllByArticleId(id) {
        var def = ioc.resolve("Promise").create();

        var dataItems = getMockDataItems();
        def.resolve(dataItems);

        return def;
    }

    function getMockDataItems() {
        var dataItems = [
            {
                id:"slide1",
                header:"Header 1",
                subHeader: "sub Header 1",
                slides: [
                    {
                        id: "slide1.2",
                        type:"sub",
                        header: "Header 1.2",
                        subHeader: "sub Header 1.2",
                    },
                    {
                        id: "slide1.3",
                        type:"sibling",
                        header: "Header 1.3",
                        subHeader: "sub Header 1.3",
                    },
                    {
                        id: "slide1.4",
                        type:"sub",
                        header: "Header 1.4",
                        subHeader: "sub Header 1.4",
                    }

                ]
            }, {
                id: "slide2",
                header:"Header 2",
                subHeader:"sub Header 2"
            }, {
                id: "slide3",
                header:"Header 3",
                subHeader:"sub Header 3"
            }, {
                id: "slide4",
                header:"Header 4",
                subHeader:"sub Header 4"
            }, {
                id: "slide5",
                header:"Header 5",
                subHeader:"sub Header 5"
            }
        ];
        return dataItems;
    }
});