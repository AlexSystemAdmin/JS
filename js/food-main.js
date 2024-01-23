'use strict';

//document.body.style.backgroundColor = 'black';

window.addEventListener('DOMContentLoaded' , () => {

    // tabs

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

    // timer

    const endTime = '2024-02-23';

    function getTime(endtime){
        const time = Date.parse(endtime) - Date.parse(new Date);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor(time / (1000 * 60 * 60) % 24);
        const minutes = Math.floor(time / (1000 * 60) % 60);
        const seconds = Math.floor(time / 1000 % 60);

        return{
            'total': time,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }
    function setTime(selector, endtime){
        const timer = document.querySelector('selector');
        const days = document.querySelector('#days');
        const hours = document.querySelector('#hours');
        const minutes = document.querySelector('#minutes');
        const seconds = document.querySelector('#seconds');

        const timeDate = setInterval(updateTime, 1000);

        updateTime();

        function updateTime(){
            const time = getTime(endtime);
            if(time.total <= 0){
                clearInterval(timeDate);
            }
            days.innerHTML = time.days;
            hours.innerHTML = time.hours;
            minutes.innerHTML = time.minutes;
            seconds.innerHTML = time.seconds;
        }
    }
    setTime('.timer', endTime);
})

