//Object Validator
function Validator(options) {
    function validate(inputElement, rule) {
        // value: inputElement.value
        // test func: rule.test
        var errorElement = inputElement.parentElement.querySelector(".message");
        var errorMessage = rule.test(inputElement.value);

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add("invalid");
        }
        else {
            errorElement.innerText = "";
            inputElement.parentElement.classList.remove("invalid");
        }
    }

    var formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);

            if (inputElement) {
                inputElement.onblur = function () {
                    validate(inputElement, rule);
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