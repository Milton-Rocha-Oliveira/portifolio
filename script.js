
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
  idx++;

  if(idx > img.length -1){
      idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 37}rem)`;
}

setInterval(carrossel, 3800); 

var swiper = new Swiper(".swiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
});