const menuButton = document.querySelector(".accordion");
const navigation = document.querySelector(".main-navigation");
const navigationlinks = document.querySelectorAll(".navigation-list a");

menuButton.addEventListener("click", () => {
    const menuIsOpen = navigation.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", menuIsOpen);
});

navigationlinks.forEach ((Link) => {
    Link.addEventListener("click", () => {
        navigation.classList.remove("is-open");

        menuButton.setAttribute("aria-expanded", "false");
    });
})
