jQuery(function () {

  $('#scrollDown1').delay( 500 ).fadeIn('slow ');

  $('#scrollDown1').on('click', function(){
    $('#section2').ScrollTo({
      duration: 1500,
      easing: 'swing'
    });
  });

  $('#scrollDown2').on('click', function(){
    $('#section3').ScrollTo({
      duration: 1500,
      easing: 'swing'
    });
  });

  $('#scrollDown3').on('click', function(){
    $('#section4').ScrollTo({
      duration: 1500,
      easing: 'swing'
    });
  });

  $('#scrollDown4').on('click', function(){
    $('#section5').ScrollTo({
      duration: 1500,
      easing: 'swing'
    });
  });

  $('#scrollDown5').on('click', function(){
    $('#section6').ScrollTo({
      duration: 1500,
      easing: 'swing'
    });
  });
});
