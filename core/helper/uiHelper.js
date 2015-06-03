define(function () {
    var helper = {
        addCss:addCss
    };
    return helper;


    function addCss(cssUrl) {
        var link = document.createElement('link');
        link.href = cssUrl;
        link.rel = "stylesheet";
        document.head.appendChild(link);
        /*var html = String.format("<link href=\"{0}\" rel=\"stylesheet\" />", cssUrl);
        $("head").append(html);*/
    }
});