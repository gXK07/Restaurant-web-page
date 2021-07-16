import Img from './image.jpg';
import './style.css';


const objMenu =(()=> {
    const menu = new Array(3);

    const createMenu = (header) =>{
    for (let i=0; i<3; i++){
        menu[i] = document.createElement("button");
        header.appendChild(menu[i]);
    }
    menu[0].textContent = "Pizza";
    menu[0].classList.add("pizza");
    menu[1].textContent = "Pasta";
    menu[1].classList.add("Pates");
    menu[2].textContent = "Gelato";
    menu[2].classList.add("Glaces");
    }

    return {createMenu, menu};
})()





const loadPage1 = () => {
    const header = document.createElement("header");
    objMenu.createMenu(header);
    content.appendChild(header);
    const mainImage = new Image();
    mainImage.src = Img;
    console.log(mainImage);
    mainImage.classList.add("mainImage");
    content.appendChild(mainImage);
}

export {loadPage1, objMenu};