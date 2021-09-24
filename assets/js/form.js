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
let burgerM = document.querySelector('.burger');
let formModalMask = document.querySelector('.form-modal-mask');
let formModalMaskClose = document.querySelector('.form-modal-mask-close');
let headerBtn = document.querySelector('.header-button-btn');

headerBtn.addEventListener('click', function(e){

  e.preventDefault();
  burgerM.style.display = 'none';
  formModal.classList.add('show-modal');
  formModalMask.classList.add('show-modal');
  document.body.classList.add('oh');
})

formModalMaskClose.addEventListener('click', function(){
  formModalMask.classList.remove('show-modal');
  burgerM.style.display = 'block';
  formModal.classList.remove('show-modal');
  document.body.classList.remove('oh');
})