const maxImageNumber = 2;

window.onload = function() {
  const randomImageIndex = Math.floor(Math.random() * maxImageNumber) + 1;

  const imgElement = document.querySelector(".header_img");
  imgElement.src = `assets/img/header/${randomImageIndex}.png`;
};
