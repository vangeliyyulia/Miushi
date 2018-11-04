// Mobile Menu
(function () {
    var hamburger = {
      navToggle: document.querySelector('.btn_mnu'),
      nav: document.querySelector('.nav__list'),
      doToggle: function (e) {
        e.preventDefault();
        this.navToggle.classList.toggle('active');
        this.nav.classList.toggle('active');
      }
    };
    hamburger.navToggle.addEventListener('click', function (e) { hamburger.doToggle(e); });
    hamburger.nav.addEventListener('click', function (e) { hamburger.doToggle(e); });
  }());

(function () {
    var ham = {
      navToggle: document.querySelector('.btn_mnu'),
      nav: document.querySelector('.contacts-wrapper'),
      doToggle: function (e) {
        e.preventDefault();
        this.navToggle.classList.toggle('active');
        this.nav.classList.toggle('active');
      }
    };
    ham.navToggle.addEventListener('click', function (e) { ham.doToggle(e); });
    ham.nav.addEventListener('click', function (e) { ham.doToggle(e); });
}());
