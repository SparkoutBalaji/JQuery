
$(function(){
  //display effetcs
  $('p').hide();
  $('#show').click(function(){
      $('p').show(); 
  });
  $('#hide').click(function(){
    $('p').hide(); 
  });
  $('#toggle').click(function(){
    $('p').toggle(); 
  });     

  //Fading Effects
  $('#fadein').click(function(){
    $('p').fadeIn();
  });
  $('#fadeout').click(function(){
    $('p').fadeOut();
  });
  $('#fadetoggle').click(function(){
    $('p').fadeToggle();
  });
  $('#fadeto').click(function(){
    $('p').fadeTo('slow', 0.5);
  });
  $('#fadereturn').click(function(){
    $('p').fadeTo('fast', 1);
  });

  //Sliding Effects
  $('#slideup').click(function(){
    $('p').slideUp('slow');
  });
  $('#slidedown').click(function(){
    $('p').slideDown('slow');
  });
  $('#slidetoggle').click(function(){
    $('p').fadeToggle('slow');
  });

  //other Effects



});