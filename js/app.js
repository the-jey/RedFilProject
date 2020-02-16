// Sélectionner les items dans le DOM
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems =  document.querySelectorAll('.nav-item');

// L'état initial du menu
let showMenu = false; 

// Lance la fonction toggleMenu lors de l'évènement click sur le bouton du menu
menuBtn.addEventListener('click', toggleMenu);

// Définir la fonction toggleMenu
function toggleMenu() {
    //Si le menu n'est pas déjà ouvert
    if(!showMenu) {
        //Ajout de la classe qui permet de fermer le bouton menu
        menuBtn.classList.add('close');
        //Ajout de la classe qui permet de montrer le menu
        menu.classList.add('show');
        //Ajout de la classe qui permet de montrer la navigation du menu
        menuNav.classList.add('show');
        //Ajout de la classe qui permet de montrer la photo du menu
        menuBranding.classList.add('show');
        //Ajout de la classe qui permet de montrer chaque liens du menu
        navItems.forEach(item => item.classList.add('show'));

        //Etat du menu
        showMenu = true;
    } else {
        // Fais tout le contraire
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // Etat du menu
        showMenu = false;
    }
}