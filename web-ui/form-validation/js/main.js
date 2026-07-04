function validate(selector, error) {
    var errorElement = selector.parentElement.querySelector(".message");
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

function check(selector, rule) {
    var error = rule(selector.value);
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

//validate email
var emailElement = document.querySelector("#email");

emailElement.onblur = function () {
    check(emailElement, isRequired);
    check(emailElement, isEmail);
}

emailElement.oninput = function () {
    check(emailElement, isRequired);
    check(emailElement, isEmail);
}