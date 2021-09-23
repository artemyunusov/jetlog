let toTop = document.querySelector('.to-top');

window.addEventListener('scroll', function(){
  let winPos = window.pageYOffset;

  if(winPos > innerHeight / 2){
    toTop.classList.add('show-tt');
  }
  else{
    toTop.classList.remove('show-tt');
  }

})

window.addEventListener('load', function(){
  let winPos = window.pageYOffset;

  if(winPos > innerHeight  / 2){
    toTop.classList.add('show-tt');
  }
  else{
    toTop.classList.remove('show-tt');
  }

})

toTop.addEventListener('click', function(){

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})