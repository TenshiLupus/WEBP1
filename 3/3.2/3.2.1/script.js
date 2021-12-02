
var i = 0;
var catImages = [];

catImages[0] = 'media/images/cat.jpg';
catImages[1] = 'media/images/cat2.jpg';

function changeImgAuto(){
    $("#catAuto").attr("src", catImages[i]);

    if (i < catImages.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImgAuto()", 3000);
}

function changeImgEnter(){
    $("#catEnter").attr("src", catImages[i]);

    if(i < catImages.length - 1){
        i++;
    }else{
        i = 0;
    }

}

$('#catEnter').click(changeImgEnter)

$(document).ready(changeImgAuto());
