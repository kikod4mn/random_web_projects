const menuToggle = document.getElementById('navToggle');
const nav        = document.getElementById('nav');
menuToggle.addEventListener('click', () => nav.classList.toggle('expanded'));