 $(window).on('load', function() {
    $('#preloader').delay(450).fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(45050).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(45050).css({'overflow':'visible'});
});

const elButton = document.querySelector('.menu-button');
const elSite = document.querySelector('#site');

elButton.addEventListener('click',()=>{
  if ( elSite.dataset.menu ) {
    delete elSite.dataset.menu;
  } else {
    elSite.dataset.menu = true;
  }
});


setTimeout(()=>{ 
  elButton.click(); 
},100);