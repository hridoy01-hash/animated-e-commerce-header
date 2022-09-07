(async function () {
    function hamburgerMenu() {
        let hamburgerBtn = document.querySelector(".s0401_hamburger_icon")
        let s0401_hamburger_icon = document.querySelector(".s0401_hamburger_icon")
        let s0401_sidebar_area = document.querySelector(".s0401_sidebar_area")

        hamburgerBtn.addEventListener("click", function () {
            s0401_hamburger_icon.classList.toggle("s0401_hamburger_icon_active");

        })
        hamburgerBtn.addEventListener("click", function () {
            s0401_sidebar_area.classList.toggle("s0401_sidebar_area_open");

        });
    }
    hamburgerMenu();



})();