
// Set the date we're counting down to
var countDownDate2 = new Date("Mar 31, 2019 06:10:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate2 - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer2").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {3
    clearInterval(x);
    document.getElementById("timer2").innerHTML = "EXPIRED";
  }
}, 1000);

