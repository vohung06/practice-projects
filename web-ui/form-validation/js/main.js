var fullnameElement = document.querySelector("#fullname");

function isRequired(value) {
    return value.trim() ? undefined : "Vui lòng nhập nội dung";
}

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

// validate fullname
fullnameElement.onblur = function () {
    var error = isRequired(fullnameElement.value);
    validate(fullnameElement, error);
}

fullnameElement.oninput = function () {
    var error = isRequired(fullnameElement.value);
    validate(fullnameElement, error);
}