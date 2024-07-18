var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    spaceBetween: 50,
    speed: 2500,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        576: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        },
        768: {
            slidesPerView: 2,
            spaceBetweenSlides: 20
        },
        992: {
            slidesPerView: 3,
            spaceBetweenSlides: 50
        }
    },


});