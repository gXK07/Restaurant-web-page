import ImgPizza from './Pizza.jpg';

const displayPizza = () => {
    const mainImage = document.getElementsByClassName("mainImage");
    mainImage[0].src = ImgPizza;
}

export {displayPizza};