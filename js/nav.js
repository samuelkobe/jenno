if (document.querySelector("[data-title='store']") != null) {
    const STORE_MENU_OBJECT = document.querySelector("[data-title='store']");
    STORE_MENU_OBJECT.removeAttribute("href");
} else {
    // not found;
}

if (document.querySelector("[data-title='submenu']") != null) {
    const SUBMENU_MENU_OBJECT = document.querySelector("[data-title='submenu']");
    SUBMENU_MENU_OBJECT.removeAttribute("href");
} else {
    // not found;
}