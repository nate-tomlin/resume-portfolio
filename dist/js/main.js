/* Menu Open and Close */

//Select DOM Items
const menuBTN = document.querySelector('.menu-btn');
const menuBTNClose = document.querySelector('.menu-btn-close');
const links = document.querySelector('.links');

//Set Initial State of Menu
let showMenu = false;

//Add EventListeners to DOM Items
menuBTN.addEventListener('click', toggleMenu);
menuBTNClose.addEventListener('click', toggleMenu);
links.addEventListener('click', toggleMenu);

//Function That Moves in Menu Items
function toggleMenu() {
    if (!showMenu) {
        document.getElementById('menu').style.left = '0';
        document.getElementById('menu-background').style.left = '0';

        showMenu = true;
    } else {
        document.getElementById('menu').style.left = '-300px';
        document.getElementById('menu-background').style.left = '100%';

        showMenu = false;
    }
}