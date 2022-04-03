var i = 0;
var images = [
               '../photo/ordi/img1.jpg',
               '../photo/ordi/img2.jpg',
               '../photo/ordi/img3.jpg',
               '../photo/ordi/img4.jpg',
               '../photo/ordi/img5.jpg',
               '../photo/ordi/img6.jpg',
                '../photo/ordi/img7.jpg',
                '../photo/ordi/img8.jpg',
                '../photo/ordi/img9.png'] ;
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