var i = 0;
var images = [
                '../photo/tel/img1.jpg',
                '../photo/tel/img2.jpg',
                '../photo/tel/img3.jpeg',
                '../photo/tel/img4.png'] ;
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