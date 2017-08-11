// Joshua McKendall

'use strict';


(function() {

  var logo      = document.getElementById('logo'),
      day       = logo.getElementsByClassName('day')[0],
      afternoon = logo.getElementsByClassName('afternoon')[0],
      night     = logo.getElementsByClassName('night')[0],
      manuallyChanged = false,
      selector  = document.getElementById('theme-switcher');


  selector.addEventListener('change', function(e) {
      changeTheme(selector.value);
      manuallyChanged = true;
  });

  function setTime() {
    var date = new Date(),
        currentHour = date.getHours(),
        times = {

              'day' : [6, 14],
              'afternoon' : [15, 18]

        };

    for (var time in times) {

      var minHour = times[time][0],
          maxHour = times[time][1];

      if(currentHour >= minHour && currentHour <= maxHour) {

        changeLogo(time);
        if(!manuallyChanged) {
          changeTheme();
        }

      } else if( (currentHour >= 19 && currentHour <= 24) || (currentHour >= 1 && currentHour <= 5) ) {

        changeLogo('night');
        if(!manuallyChanged) {
          changeTheme('night');
        }

      }

    }
  }

  function changeTime() {

    setTime();

    setInterval(function() {

      setTime();

    }, 60000); // Fire this function every minute

  }

  function changeLogo(time) {


    switch(time) {

      case 'day' :
        day.setAttribute('display', 'block'); 
        afternoon.setAttribute('display', 'none');
        night.setAttribute('display', 'none');

      break;

      case 'afternoon' : 
        day.setAttribute('display', 'none'); 
        afternoon.setAttribute('display', 'block');
        night.setAttribute('display', 'none');
      break;

      default :   
        day.setAttribute('display', 'none'); 
        afternoon.setAttribute('display', 'none');
        night.setAttribute('display', 'block');


    }
  }

  function changeTheme(time) {

    if(time == 'night') {
      document.getElementById('style-theme').setAttribute('href', './style-night.css')
    } else {
      document.getElementById('style-theme').setAttribute('href', '');
    }

  }

  changeTime();

})();
