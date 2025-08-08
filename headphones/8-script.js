const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('#navbar ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamburger.classList.toggle('active');
});
