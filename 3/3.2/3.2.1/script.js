
let i = 0;
const catImages = [];

catImages[0] = 'media/images/cat.jpg';
catImages[1] = 'media/images/cat2.jpg';

function changeImgAuto(){
    document.querySelector('#catAuto').setAttribute("src", catImages[i]);
    
    if (i < catImages.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImgAuto()", 3000);
}

function changeImgEnter(){
    document.querySelector('#catEnter').setAttribute("src", catImages[i]);

    if(i < catImages.length - 1){
        i++;
    }else{
        i = 0;
    }

}

document.querySelector('#catEnter').addEventListener('click',changeImgEnter);

document.addEventListener('DOMContentLoaded',changeImgAuto);
