const checkedImg = document.getElementById('imgmenu');
let imgClose = document.getElementById('imgClose')
const bodiBak = document.getElementById('bodiBak')

checkedImg.addEventListener('change', function() {
    if (this.checked) {
        imgClose.src = 'images/icon-close-menu.svg';
        bodiBak.style.display = 'block';
    } else {
        imgClose.src = 'images/icon-menu.svg';
        bodiBak.style.display = 'none';
    }
  });
  