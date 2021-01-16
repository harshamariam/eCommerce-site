$(document).ready(function() {
    $(window).scroll(function () { 
      console.log($(window).scrollTop());
      if ($(window).scrollTop() > 0) {
        $('#navbar').addClass('d-block');
        $('#navbar').removeClass('d-none');
      }
      if ($(window).scrollTop() === 0) {
        $('#navbar').addClass('d-none');
        $('#navbar').removeClass('d-block');
      }
    });
  });