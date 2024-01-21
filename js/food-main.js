'use strict';

//document.body.style.backgroundColor = 'black';

window.addEventListener('DOMContentLoaded' , () => {
    let tabsContant = document.querySelectorAll('.tabcontent');
    let tabsHeaderItem = document.querySelectorAll('.tabheader__item');

    function tabsDisappear(){
        tabsHeaderItem.forEach(item=>{
            item.classList.remove('tabheader__item_active');
        });
        tabsContant.forEach(item => {
            item.style.display = 'none';
        });
    }

    tabsDisappear();
    tabsContant[0].style.display = 'block';
    tabsHeaderItem[0].classList.add('tabheader__item_active');

    for(let j = 0; j < tabsHeaderItem.length; j++){
        tabsHeaderItem[j].addEventListener('click' , function(){
            tabsDisappear();
            tabsContant[j].style.display = 'block';
            this.classList.add('tabheader__item_active');
        });
    }
})

