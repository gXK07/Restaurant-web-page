import ImgPates from './Pates.jpg';



const displayPates = () => {
    const mainImage = document.getElementsByClassName("mainImage");
    mainImage[0].src = ImgPates;
}

export {displayPates};