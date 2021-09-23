$(function(){

  $('.faq .faq-text:first').show();

  $('.faq .faq-title').on('click', function(){
    $('.faq-title').removeClass('active');
    $(this).addClass('active');
    let answer = $(this).next();
    let icon = $(this).children;
    
    $('.faq .faq-text:visible').not(answer).slideUp(400);
    answer.slideDown(400);
  });
  
});