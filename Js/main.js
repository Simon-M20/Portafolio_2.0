import { darkTheme } from "./Modules/darkMode.js";
import lightbox from "./Modules/lightBox.js";
import { menuShow } from "./Modules/menu.js";
import scrollTopBtn from "./Modules/scroll-top-btn.js";
import { sendForm } from "./Modules/sendForm.js";
import { servicesInfo } from "./Modules/servicesShow.js";
import skillSwiper from "./Modules/skillSwiper.js";
import swiper from "./Modules/swiper.js";
import contactFormValidation from "./Modules/validationForm.js";

document.addEventListener("DOMContentLoaded", e => {
    scrollTopBtn(".scroll-top"),
    swiper,
    menuShow(".menu-btn", ".header__menu", ".menu-link a")    
    skillSwiper,
    lightbox(),
    servicesInfo(),
    sendForm();
    contactFormValidation();
});

darkTheme('.dark-span', "dark-mode")