$(function() {

  var $weather = $('#weather');
  var $cityName = $('#cityName');

  $weather.on('click', function(){
    var xhr = new XMLHttpRequest();
    var i = $cityName.value;

    xhr.onreadystatechange = function(){
      if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
          var data = JSON.parse(this.responseText);
          console.log('hit2')
          console.log(data.main.temp);
          debugger;
        }
      }
    }

    xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + i + '&APPID=9801ef520dd63b88d92f1ecbc66c6619')
    xhr.send();

    });
  })
