//Object Validator
function Validator(options) {
    var formElement = document.querySelector(options.form);

    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector(".message");

            if (inputElement) {
                inputElement.onblur = function () {
                    // value: inputElement.value
                    // test func: rule.test
                    var errorMessage = rule.test(inputElement.value);

                    if (errorMessage) {
                        errorElement.innerText = errorMessage;
                    }
                    else
                        errorElement.innerText = "";
                }
            }
        });

    }
}

//Define rules
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "Vui lòng nhập nội dung!";
        }
    };
}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function () {

        }
    };
}