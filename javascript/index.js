$(function () {
    $('img.menu-mobile').on('click', function() { 
        $('ul#ul-menu').addClass('novo-menu').slideToggle();
    });  
  });