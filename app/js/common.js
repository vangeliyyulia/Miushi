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


