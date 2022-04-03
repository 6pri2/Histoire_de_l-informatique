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
                '../photo/ordi/img9.png',
                '../photo/tablette/img1.jpg',
                '../photo/tablette/img2.jpg',
                '../photo/tablette/img3.jpg',
                '../photo/tablette/img5.jpg',
                '../photo/tel/img1.jpg',
                '../photo/tel/img2.jpg',
                '../photo/tel/img3.jpeg',
                '../photo/tel/img4.png',
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