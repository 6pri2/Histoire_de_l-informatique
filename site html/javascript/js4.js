var i = 0;
var images = [
                '../photo/mémoire/img1.jpg',
                '../photo/mémoire/img2.jpg',
                '../photo/mémoire/img3.jpg',
                '../photo/mémoire/img4.jpg'] ;
var time = 3000;

function changeImg(){

document.slide.src = images[i];

if (i < images.length - 1) {
i++;
} else {
i = 0;
}
setTimeout("changeImg()", time);
}
window.onload = changeImg;