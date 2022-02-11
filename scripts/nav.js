const toggleButton = document.querySelector(".toggle-button-ecom");
const navbarLinks = document.querySelector(".navbar-links-ecom");
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})