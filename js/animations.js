console.log("animations");

$(document).ready( function () {

  $('#scrollDown1').delay( 500 ).fadeIn('slow ');

  $('#scrollDown1').click( function(){
    console.log("clicked dat scroll down");
    $('#section2').ScrollTo({
      duration: 1500,
      easing: 'swing'
    });
  });

  $('#scrollDown2').click( function(){
    console.log("clicked dat scroll down");
    $('#section3').ScrollTo({
      duration: 1500,
      easing: 'swing'
    });
  });

  $('#scrollDown3').click( function(){
    console.log("clicked dat scroll down");
    $('#section4').ScrollTo({
      duration: 1500,
      easing: 'swing'
    });
  });

  $('#scrollDown4').click( function(){
    console.log("clicked dat scroll down");
    $('#section5').ScrollTo({
      duration: 1500,
      easing: 'swing'
    });
  });

});
