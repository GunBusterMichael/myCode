window.addEventListener('load', function() {
    /* var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
        },
    }); */

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true, // 循环模式选项

        // 自动播放
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        // 分页器
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        // 前进、后退按钮
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
})