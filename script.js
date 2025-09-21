
var countDownDate = new Date("Sep 22, 2025 24:00:00").getTime();


var x = setInterval(function() {
  var now = Date.now();
  var distance = countDownDate - now;

  // --- 1) If time is up, STOP before computing anything ---
  if (distance <= 0) {
    clearInterval(x);

    // Show exact zeros (prevent -1)
    ['days','hours','minutes','seconds'].forEach(function(id) {
      var el = document.getElementById(id);
      if (el) el.textContent = '0';
    });

    // Fade out overlay and show popup (guard element existence)
    var overlay = document.getElementById('overlay');
    if (overlay) {
      overlay.classList.add('fade-out');
      setTimeout(function() {
        overlay.style.display = 'none';
        var popup = document.getElementById('popup-message');
        if (popup) popup.classList.add('show');

        setTimeout(function() {
            popup.classList.add("hide")
        }, 4000);
        
        setTimeout(function() {
            popup.classList.add("off");
        }, 4000);
      }, 1000); // match your CSS transition time
    }

    return; // important: skip the normal update code
  }

  // --- 2) Normal update (only runs when distance > 0) ---
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent    = days;
  document.getElementById("hours").textContent   = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}, 1000);

// balloon animation
