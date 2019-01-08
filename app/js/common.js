// Mobile Menu
(function () {
    var hamburger = {
      navToggle: document.querySelector('.btn_mnu'),
      nav: document.querySelector('.nav__list'),
      contacts: document.querySelector('.contacts-wrapper'),
      doToggle: function (e) {
        e.preventDefault();
        this.navToggle.classList.toggle('active');
        this.nav.classList.toggle('active');
        this.contacts.classList.toggle('active');
      }
    };
    hamburger.navToggle.addEventListener('click', function (e) { hamburger.doToggle(e); });
    hamburger.nav.addEventListener('click', function (e) { hamburger.doToggle(e); });
  }());

// Slider
$('.owl-carousel').owlCarousel({
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});


$('.section-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    adaptiveHeight: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });


