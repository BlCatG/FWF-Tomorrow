import { check,compare } from './password.js';

$("#button-check").on("click" , () => {
    check($("#password").val());
});

$("#button-compare").on("click", () => {
    compare($("#password").val());
});

$("#container-form-ul-link-signUp").on("click", () => {
    $(".container").css({
        "display": "none"
    });
    $(".container__add").css({
        "display" : "grid"
    });
});

$("#container-form-ul-link-login").on("click", () => {
    $(".container").css({
        "display": "grid"
    });
    $(".container__add").css({
        "display" : "none"
    });
});

