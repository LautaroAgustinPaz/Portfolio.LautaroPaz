document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    const menu = document.querySelector('.menu');
    const toggleBtn = document.getElementById('toggleBtn');
  
    toggleBtn.addEventListener('click', function () {
      menu.classList.toggle('open');
      overlay.style.display = (menu.classList.contains('open')) ? 'block' : 'none';
    });
  
    overlay.addEventListener('click', function () {
      menu.classList.remove('open');
      overlay.style.display = 'none';
    });
  });
  