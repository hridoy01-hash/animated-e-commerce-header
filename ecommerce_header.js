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

    function searchPopUp() {
        const s0401_header_search_id = document.getElementById("s0401_header_search_id");
        s0401_header_search_id.addEventListener("click", function () {
            document.getElementById("s0401_search_box_area").classList.add("s0401_search_popup");
        });
        const s0401_search_popup_close_btn = document.getElementById("s0401_search_popup_close_btn");
        s0401_search_popup_close_btn.addEventListener("click", function () {
            document.getElementById("s0401_search_box_area").classList.remove("s0401_search_popup");
        });
    };
    searchPopUp();


    function cartWishlistEvent() {

        const headerMenuItems = document.querySelectorAll(".s0401_header_icon_item_common");
        for (let i = 0; i < headerMenuItems.length; i++) {
            const headerMenuItem = headerMenuItems[i];
            headerMenuItem.addEventListener("click", function () {
                removeActiveFill();
                headerMenuItem.classList.add("active_fill_icon");
            });
        }

    }
    cartWishlistEvent();

    function removeActiveFill() {
        const headerMenuItems = document.querySelectorAll(".s0401_header_icon_item_common");
        for (let i = 0; i < headerMenuItems.length; i++) {
            const headerMenuItem = headerMenuItems[i];
            headerMenuItem.classList.contains("active_fill_icon") && headerMenuItem.classList.remove("active_fill_icon")
        };
    };


})();