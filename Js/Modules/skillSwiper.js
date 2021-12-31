import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';

const skillSwiper = new Swiper(".skillSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    }
});

export default skillSwiper;