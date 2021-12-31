export const servicesInfo = () => {
    const icon = document.querySelectorAll('.service-container');
    const info = document.querySelectorAll('.content');
    // console.log(icon, info);

    icon.forEach(el => {
        el.addEventListener("click", e => {
            info.forEach(info => {
                info.classList.toggle('is-active')
                // console.log(e.target, info);
            })
        })
    })

}