document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup');
    popup.style.display = 'flex';

    setTimeout(function() {
      popup.style.display = 'none';
    }, 3000);
  });