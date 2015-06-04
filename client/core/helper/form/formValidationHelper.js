define(function () {
    var formValidation = {
        isValid: isValid
    };
    return formValidation;
    /*
    Validate content of control base on its type and input value.
    return true if valid and false if invalid
    control can be text input, datepciker, radio, .....
    */
    function isValid(control) {
        return true;
    }
});