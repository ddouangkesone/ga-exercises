$(function() {


  var $startSongButton = $('#startSongButton')
  var bottles = 99;
  var $list = $('#list');
  var $test = $('#test');
  var $reset = $('#reset');
  var $clear = $('#clear');


  $startSongButton.on('click', function() {
    console.log('hit!');
      $test.text(bottles + " bottles of beer on the wall " + bottles + " Of beer. Take one down and pass it around " + (bottles - 1) + " of beer on the wall!");
      bottles -= 1;
      $startSongButton.text('take one bottle down');


    });

  $reset.on('click', function() {
    bottles = 99;
    $test.text(bottles + " bottles of beer on the wall " + bottles + " Of beer. Take one down and pass it around " + (bottles - 1) + " of beer on the wall!");

  });

  $clear.on('click', function(){
    $test.text(' ');
    $startSongButton.text('Click to start');
  })

});
