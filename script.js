$(function(){

$('#link1').click(function(){
  $('html, body').animate({'scrollTop':0},500);
});

$('.left-body a').click(function(){
  var id =$(this).attr('href')
  var position = $(id).offset().top;
  $('html, body').animate({'scrollTop':position},500);
});

$(window).ready(function (){
    $('.fadein').addClass('scrollin');
});


});
