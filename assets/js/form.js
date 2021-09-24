$(document).ready(function() {

	//E-mail Ajax Send
	$(".form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//E-mail Ajax Send
	$(".form-modal").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
      window.location('calculator.html');
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

let formModal = document.querySelector('.form-modal-wrap');
let formM = document.querySelector('.form-modal');
let burgerM = document.querySelector('.burger');
let formModalMaskClose = document.querySelector('.form-modal-mask-close');
let headerBtn = document.querySelector('.header-button-btn');
let headerW = document.querySelector('.header');

headerBtn.addEventListener('click', function(e){

  e.preventDefault();
  formModal.classList.add('show-modal');
  formM.classList.add('show-modal-f');
  burgerM.style.display = 'none';
  document.body.classList.add('oh');
  document.body.classList.add('modal-m');
  headerW.classList.add('modal-h');
})

formModalMaskClose.addEventListener('click', function(){
  burgerM.style.display = 'block';
  formModal.classList.remove('show-modal');
  formM.classList.remove('show-modal-f');
  document.body.classList.remove('oh');
  document.body.classList.remove('modal-m');
  headerW.classList.remove('modal-h');
})