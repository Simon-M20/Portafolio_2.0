export const darkTheme = (btn, classDark) => {
    const themeBtn = document.querySelector(btn);
    const selectors = document.querySelectorAll("[data-dark]");
    const input = document.getElementById('dark__checkbox');
    const img = document.querySelectorAll(".github")

    let moon = "🌙"
    let sun = "☀️"  

    
    const darkMode = () => {
        themeBtn.textContent = moon;
        themeBtn.classList.add('is-active');
        selectors.forEach(el => el.classList.add(classDark));
        img.forEach(img => {
            img.src = "Img/Github.png"
            // console.log(img.src)
        })
        localStorage.setItem("theme", "dark");
    };

    const lightMode = () => {
        themeBtn.textContent = sun;
        themeBtn.classList.remove('is-active')
        selectors.forEach(el => el.classList.remove(classDark));
        img.forEach(img => {
            img.src = "Img/Github-dark.png"
            // console.log(img.src)
        })
        localStorage.setItem("theme", "light");
    }

    document.addEventListener("click", e => {
        if (e.target.matches(btn) || e.target === input) {

            if (themeBtn.textContent === sun) {
                darkMode();
                input.checked = true;
                // console.log(themeBtn.textContent, "lunita")
            } else {
                lightMode();
                input.checked = false;
                // console.log(themeBtn.textContent, "solecito")
            };
        };
    });

    document.addEventListener("DOMContentLoaded", e => {
        if (localStorage.getItem("theme") === null) localStorage.setItem("theme", "ligth");

        if (localStorage.getItem("theme") === "light") lightMode();

        if (localStorage.getItem("theme") === "dark") {
            darkMode();
            input.checked = true;
        }
    })
};