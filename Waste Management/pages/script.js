document.addEventListener('DOMContentLoaded', function () {
  var infoButtons = document.querySelectorAll('.info-btn');
  infoButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var moreInfo = this.nextElementSibling;
      if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
        moreInfo.style.display = 'block';
      } else {
        moreInfo.style.display = 'none';
      }
    });
  });
});
