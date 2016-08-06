$(document).ready(function() {
  // set the 'active' class on nav URLs which match the current path
  (function () {
    var navLinks = $('nav a');
    _.each(navLinks, function (a) {
      if (a.pathname === window.location.pathname) {
        $(a).addClass('current');
      }
    });

  }());
});
