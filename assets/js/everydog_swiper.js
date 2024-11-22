let swiper = new Swiper(".mySlider", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    breakpoints: {
        // When the window width is >= 640px
        0: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2, // Show 2 slides
        },
        // When the window width is >= 1024px
        1024: {
            slidesPerView: 3, // Show 3 slides
        },
    }
});