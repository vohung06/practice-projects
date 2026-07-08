function validate(selector, rules) {
    var errorElement = selector.parentElement.querySelector(".message");

    for (var i = 0; i < rules.length; i++) {
        var error = rules[i](selector.value);
        if (error) {
            // display the first error found and return
            errorElement.innerText = error;
            selector.parentElement.classList.add("invalid");
            return;
        }
    }

    clearError(selector);
}

function clearError(selector) {
    var errorElement = selector.parentElement.querySelector(".message");
    errorElement.innerText = "";
    selector.parentElement.classList.remove("invalid");
}

function isRequired(value) {
    return value.trim() ? undefined : "Vui lòng nhập nội dung";
}

function isEmail(value) {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(value) ? undefined : "Vui lòng nhập email";
}

function minLength(value) {
    return (value.length >= 6) ? undefined : "Vui lòng nhập tối thiểu 6 ký tự";
}

function isConfirmed(selector) {
    return function (value) {
        var confirmValue = document.querySelector(selector).value;
        return (value === confirmValue) ? undefined : "Nhập lại không chính xác";
    }
}

// validate fullname
var fullnameElement = document.querySelector("#fullname");

fullnameElement.onblur = function () {
    validate(fullnameElement, [isRequired]);
}

fullnameElement.oninput = function () {
    clearError(fullnameElement);
}

// validate email
var emailElement = document.querySelector("#email");

emailElement.onblur = function () {
    validate(emailElement, [isRequired, isEmail]);
}

emailElement.oninput = function () {
    clearError(emailElement);
}

// validate password
var passwordElement = document.querySelector("#password");

passwordElement.onblur = function () {
    validate(passwordElement, [minLength]);
}

passwordElement.oninput = function () {
    clearError(passwordElement);
}

// validate confirm-password
var confirmElement = document.querySelector("#confirm-password");

confirmElement.onblur = function () {
    validate(confirmElement, [isRequired, isConfirmed("#password")]);
}

confirmElement.oninput = function () {
    clearError(confirmElement);
}