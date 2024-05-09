//imports

import './styles/index.css';
import home from "./modules/home.js";
import menu from "./modules/menu.js";
import contact from "./modules/contact.js";
import clearPage from "./modules/clearPage.js";

//get buttons
const buttons = document.querySelectorAll("button");

home();

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        switch (button.id) {
            case 'home-btn':
                clearPage();
                home();
                break;
            case 'menu-btn':
                clearPage();
                menu();
                break;
            case 'contact-btn':
                clearPage();
                contact();
                break;
        }
    });
});