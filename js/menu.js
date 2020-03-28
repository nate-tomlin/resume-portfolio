/* Menu Open and Close */

//Select DOM Items
const menuBTN = document.querySelector('.menu-btn');
const menuBTN2 = document.querySelector('.menu-btn-2x');
const menuBTNClose = document.querySelector('.menu-btn-close');
const links = document.querySelector('.links-mobile');

//Set Initial State of Menu
let showMenu = false;

//Add EventListeners to DOM Items
menuBTN.addEventListener('click', toggleMenu);
menuBTN2.addEventListener('click', toggleMenu);
menuBTNClose.addEventListener('click', toggleMenu);
links.addEventListener('click', toggleMenu);
//Mobile Touches
menuBTN.addEventListener('touch', toggleMenu);
menuBTN2.addEventListener('touch', toggleMenu);
menuBTNClose.addEventListener('touch', toggleMenu);
links.addEventListener('touch', toggleMenu);

//Function That Moves in Menu Items
function toggleMenu() {
    if (!showMenu) {
        if (window.innerWidth <= 1120) {
            document.getElementById('menu-mobile').style.left = '0';
            document.getElementById('menu-background').style.left = '0';

            showMenu = true;
        }
    } else {
        if (window.innerWidth <= 1120) {
            document.getElementById('menu-mobile').style.left = '-300px';
            document.getElementById('menu-background').style.left = '100%';

            showMenu = false;
        }
    }

}