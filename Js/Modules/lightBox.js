export default function lightbox () {
    const images = document.querySelectorAll('.lightbox__images');
    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = document.querySelector('.lightbox__img');
    const lightboxIcon = document.querySelector('.lightbox__icon');
    const body = document.body;


    images.forEach(img => {
        img.addEventListener('click', e => {
            addImgage(img.getAttribute('src'), img.getAttribute('alt'));
            body.classList.add('.no-scroll')
            lightboxImg.classList.add('showImg');
        })
    })

    const addImgage = (src, alt) => {
        lightbox.classList.toggle('move');
        lightboxImg.classList.add('showImg');
        lightboxImg.src = src;
        lightboxImg.alt = alt;
    }

    lightboxIcon.addEventListener("click", e => {
        lightbox.classList.remove('move');  
        lightboxImg.classList.remove('showImg');
        body.classList.remove('.no-scroll');              
    });
}