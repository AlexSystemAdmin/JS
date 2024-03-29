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

    const endTime = '2024-05-20';

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


    // modal

    const modal = document.querySelector('.modal');
    const btnOpenModal = document.querySelectorAll('.btn');
    const btnCloseModal = document.querySelector('.modal__close');

    function openModal(){
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }
    function closeModal(){
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    btnOpenModal.forEach(btn => {
        btn.addEventListener('click' , openModal)
    })

    btnCloseModal.addEventListener('click' , closeModal)

    modal.addEventListener('click' , (e) => {
        if(e.target === modal){
            closeModal();
        }
    })
    document.addEventListener('keydown' , (e) => {
        if(e.code === 'Escape'){
            closeModal();
        }
    })


    // slider


    const slide = document.querySelectorAll('.offer__slide');
    const buttonSlidePrev = document.querySelector('.offer__slider-prev');
    const buttonSlideNext = document.querySelector('.offer__slider-next');
    const current = document.querySelector('#current');
    const total = document.querySelector('#total');
    let slideIndex = 0;

    current.textContent = `0${slideIndex + 1}`;

    function showSlide (index){
        slide.forEach(item => item.style.display = 'none');
        slide[index].style.display = 'block';

        if(slide.length < 10){
            total.textContent = `0${slide.length}`;
        }
        else{
            total.innerHTML = slide.length;
        }
    }

    function slideChange(n){
        slideIndex += n;
        if(slideIndex < 0){
            slideIndex = slide.length - 1;
        }
        if(slideIndex > slide.length - 1){
            slideIndex = 0;
        }
        if(slideIndex < 9){
            current.textContent = `0${slideIndex + 1}`;
        }
        else{
            current.textContent = slideIndex + 1;
        }
    }

    showSlide (slideIndex);

    buttonSlideNext.addEventListener('click' , function (){
        slideChange(1);
        showSlide (slideIndex);
    })

    buttonSlidePrev.addEventListener('click' , function (){
        slideChange(-1);
        showSlide (slideIndex);
    })

})

