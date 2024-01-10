'use strict';

let elems = document.getElementsByTagName('input');

for(let i = 0; i < 3; i++){
    elems[i].onmouseleave = show_value_in_p;
}

function show_value_in_p(){
    let p = document.getElementById("test");
    p.innerHTML = this.value;
}

//let elems_2 = document.querySelectorAll('input');

for(let i = 3; i < 6; i++){
    elems[i].addEventListener('click', show_value_in_alert);
    //elems_2[i].onclick = show_value_in_alert;
}

function show_value_in_alert(){
    let p = this.value;
    alert(p);
    this.removeEventListener('click', show_value_in_alert);
}

let p = document.querySelectorAll('p');

for(let i = 1; i < p.length; i++){
    p[i].addEventListener('click', show_square_in_p);
}

function show_square_in_p(){
    this.innerHTML = Math.pow(this.innerHTML , 2);
}

for(let i = 6; i < elems.length; i++){
    elems[i].addEventListener('mouseleave', show_input_length)
}

function show_input_length(){
    if(Number(this.value.length) == this.dataset.length){
        this.style.borderColor = 'green';
    }
    else{
        this.style.borderColor = 'red';
    }
}