function validate(selector, error) {
    var errorElement = selector.parentElement.querySelector(".message");
    console.log("validate: ", error);
    if (error) {
        errorElement.innerText = error;
        selector.parentElement.classList.add("invalid");
    }
    else {
        errorElement.innerText = "";
        selector.parentElement.classList.remove("invalid");
    }
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

function check(selector, rule) {
    var error = rule(selector.value);
    console.log("rule: ", rule.name);
    console.log("value: ", selector.value);
    console.log("error", error);
    validate(selector, error);
}

// validate fullname
var fullnameElement = document.querySelector("#fullname");

fullnameElement.onblur = function () {
    check(fullnameElement, isRequired);
}

fullnameElement.oninput = function () {
    check(fullnameElement, isRequired);
}

// validate email
var emailElement = document.querySelector("#email");

emailElement.onblur = function () {
    check(emailElement, isRequired);
    check(emailElement, isEmail);
}

emailElement.oninput = function () {
    check(emailElement, isRequired);
    check(emailElement, isEmail);
}

// validate password
var passwordElement = document.querySelector("#password");

passwordElement.onblur = function () {
    check(passwordElement, minLength);
}

passwordElement.oninput = function () {
    check(passwordElement, minLength);
}

// validate confirm-password
var confirmElement = document.querySelector("#confirm-password");

confirmElement.onblur = function () {
    check(confirmElement, isRequired);
    check(confirmElement, isConfirmed("#password"));
}

confirmElement.oninput = function () {
    check(confirmElement, isRequired);
    check(confirmElement, isConfirmed("#password"));
}