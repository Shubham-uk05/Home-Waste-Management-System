document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('bookingForm')
    .addEventListener('submit', function (event) {
      event.preventDefault();
      document.getElementById('bookingForm').style.opacity = '0';
      setTimeout(function () {
        document.getElementById('bookingForm').style.display = 'none';
        document.getElementById('confirmation').style.display = 'block';
        fadeIn(document.getElementById('confirmation'));
      }, 500);
    });
});

function fadeIn(element) {
  var opacity = 0;
  var timer = setInterval(function () {
    if (opacity >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = opacity;
    opacity += 0.1;
  }, 50);
}
