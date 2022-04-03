var i = 0;
var images = [
                '../photo/tablette/img1.jpg',
                '../photo/tablette/img2.jpg',
                '../photo/tablette/img3.jpg',
                '../photo/tablette/img5.jpg'] ;
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