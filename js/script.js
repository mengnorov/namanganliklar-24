let ready = function (cb) {
  // Check if the `document` is loaded completely
  document.readyState === "loading"
  ? document.addEventListener("DOMContentLoaded", function (e) {
    cb();
  })
  : cb();
};

// Usage
ready(function() {
  // Open sitenav click on site-header_toggler 
  let elSiteHeaderToggler = document.querySelector('.site-header_toggler');
  let elSitenav           = document.querySelector('.sitenav');

  elSiteHeaderToggler.addEventListener('click', function(){
      elSitenav.classList.toggle('sitenav---open');
  });
});