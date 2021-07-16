import {loadPage1, objMenu} from './frontPage.js';
import {displayPizza} from './pagePizza.js';
import {displayPates} from './Pates.js';
import {displayGlace} from './Glace.js';


loadPage1();
objMenu.menu[0].addEventListener("click", displayPizza);
objMenu.menu[1].addEventListener("click", displayPates);
objMenu.menu[2].addEventListener("click", displayGlace);