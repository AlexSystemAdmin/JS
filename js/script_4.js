'use strict';

function fun_1(){
    let p = document.getElementById("Exercise_1");
    p.innerHTML = "Ку-ку! А я <b>жирный</b>!";
}
function fun_2(){
    let p = document.getElementById("Exercise_2");
    p.innerHTML = "<h3>Абзац превратился в h3!</h3>";
}
function fun_3(){
    let p = document.getElementById("Exercise_3");
    p.outerHTML = "<h3>" + p.innerHTML + "</h3>";
}
function fun_4(){
    let input_1 = document.getElementById("input_1");
    let input_2 = document.getElementById("input_2");
    let span = document.getElementById("span");

    if (input_1.value != "" && input_2.value != ""){
        span.innerHTML = Number(input_1.value) + Number(input_2.value);
    }
    else{
        span.innerHTML = "?";
    }
}
function fun_5(){
    let p = document.querySelectorAll("p.Exercise_5");

    for(let i = 0; i < p.length; i++){
        p[i].innerHTML = i + 1;
    }
}