let currentIndex = 0;  
const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];  
  
function updateImage() {  
    const imgElement = document.getElementById('current-image');  
    imgElement.src = `images/${images[currentIndex]}`;  
}  
  
function nextImage() {  
    currentIndex = (currentIndex + 1) % images.length;  
    updateImage();  
}  
  
function prevImage() {  
    currentIndex = (currentIndex - 1 + images.length) % images.length;  
    updateImage();  
}  
  
// 初始加载时显示第一张图片  
updateImage();