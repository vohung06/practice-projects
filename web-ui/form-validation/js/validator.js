//Object Validator
function Validator(options) {
    var selectorRules = {};
    function validate(inputElement, rule) {
        // value: inputElement.value
        // test func: rule.test
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var errorMessage;
        // get all rules for the selector
        var rules = selectorRules[rule.selector];

        // loop through each rule and validate
        for (var i = 0; i < rules.length; i++) {
            errorMessage = rules[i](inputElement.value);
            if (errorMessage) {
                break;
            }
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add("invalid");
        }
        else {
            errorElement.innerText = "";
            inputElement.parentElement.classList.remove("invalid");
        }

        return !errorMessage;
    }

    var formElement = document.querySelector(options.form);
    if (formElement) {
        // listen event submit on button
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;

            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelector('[name]:not([disable])');
                    options.onSubmit({

                    });
                }
            }
        }

        // loop through each rule and listen events (blur, input)
        options.rules.forEach(function (rule) {
            //Save rules
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            }
            else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElement = formElement.querySelector(rule.selector);

            if (inputElement) {
                // validate on blur
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }

                // validate while the user is typing input
                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = "";
                    inputElement.parentElement.classList.remove("invalid");
                }
            }
        });

    }
}

//Define rules
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : (message || "Vui lòng nhập nội dung");
        }
    };
}

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : (message || "Vui lòng nhập email");
        }
    };
}

Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return (value.length >= min) ? undefined : (message || "Vui lòng nhập tối thiểu " + min + " ký tự");
        }
    };
}

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return (value === getConfirmValue()) ? undefined : (message || "Nhập lại không chính xác");
        }
    }
}