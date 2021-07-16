import ImgGlace from './Glace.jpg';


const displayGlace = () => {
    const mainImage = document.getElementsByClassName("mainImage");
    mainImage[0].src = ImgGlace;
}

export {displayGlace};