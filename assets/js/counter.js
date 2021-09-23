let counters = document.querySelectorAll('.stats-num-qnt');
let speed = 2000;

let elem = document.querySelector('.stats-row');

  window.addEventListener('load', countUp)
  window.addEventListener('scroll', countUp)

  function countUp(){
    let posElem = elem.offsetTop;
    let windowH = Math.ceil(window.pageYOffset + innerHeight / 3);

    counters.forEach(counter => {
      let fl = false;
      let updCount = () => {
        let target = +counter.getAttribute('data-count');
        let count = +counter.innerText;
    
        let inc = target / speed;
    
        if(count < target){
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updCount, 1);
        } else{
          count.innerText = target;
        }
      }

      if(posElem < windowH + 600){
        updCount();
      }
    })
  }