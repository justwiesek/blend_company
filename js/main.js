

const barsBtn = document.getElementById('bars');
const menu = document.getElementById('menu');
const closeBtn = document.getElementById('close');
const overlay = document.getElementById('overlay');

barsBtn.addEventListener('click', function() {
    menu.className += ' menu-is-active';
    closeBtn.className += ' menu-is-active';
    barsBtn.className += ' menu-is-active';
    overlay.className += ' menu-is-active';
});

closeBtn.addEventListener('click', function() {
    menu.className = 'menu';
    barsBtn.className = 'menu__trigger';
    closeBtn.className = 'menu__close';
    overlay.className = 'menu__overlay';
});

window.addEventListener('click', function(target){
    if (event.target === overlay) {
        menu.className = 'menu';
        barsBtn.className = 'menu__trigger';
        closeBtn.className = 'menu__close';
        overlay.className = 'menu__overlay';
    }
})



var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    autoplay: 2500,
    pagination: '.swiper-pagination',
    paginationClickable: true,
  });



  window.sr = ScrollReveal();
  sr.reveal('.gallery__list', {
      delay: 300,
      easing: 'ease-in-out',
      useDelay: 'always',
      duration: 400,
      reset: true,
      mobile: true 
  });
