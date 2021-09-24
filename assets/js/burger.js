$(".burger").click(function () {
  $(this).toggleClass('burger-clicked');
  $('.body-mask').toggleClass('mob-active');
  $('.nav-mob').toggleClass('mob-active');
  $(document.body).toggleClass('oh');
});

let mask = document.querySelector('.body-mask');
let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav-mob');
let menuFixed = document.querySelector('.nav-fixed');
let menu = document.querySelector('.nav');
let links = document.querySelectorAll('.nav-link');
let mobLinks = document.querySelectorAll('.nav-fixed-link');
let orderBtn = document.querySelector('.services-link a');

orderBtn.addEventListener('click', function(e){
  e.preventDefault();

  // console.log(e.target.parentNode);
  scrollToTarget(e.target.parentNode.hash);
})

menuFixed.addEventListener('click', function(e){
  let link = e.target;

  if(link.classList.contains('nav-fixed-link')){
    e.preventDefault();
    scrollToTarget(link.hash);
    if(mask.classList.contains('mob-active')){
      mask.classList.remove('mob-active');
      document.body.classList.remove('oh');
      burger.classList.remove('burger-clicked');
      nav.classList.remove('mob-active');
    }
  }
})

menu.addEventListener('click', function(e){
  let link = e.target;

  if(link.classList.contains('nav-link')){
    e.preventDefault();
    scrollToTarget(link.hash);
  }
})

function scrollToTarget(id){
  let target = document.querySelector(id);
  let pos = target.offsetTop;

  window.scrollTo({
    top: pos,
    behavior: "smooth"
  })
}

let mediaBtn = document.querySelector('.intro-link a');

mediaBtn.addEventListener('click', function(e){
  e.preventDefault();
  scrollToTarget(mediaBtn.hash);
})

let mobSub = document.querySelector('.nav-fixed-pos');
let mobSubTarget = document.querySelector('.nav-fixed-sub');

mobSub.addEventListener('click', function(e){

  // e.preventDefault();

  if(e.target.parentNode.classList.contains('nav-fixed-pos')){

    mobSubTarget.classList.toggle('sub-menu-show');
  }
})