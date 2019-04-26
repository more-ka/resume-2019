!function(){
  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        topNavBer.classList.add('sticky')
      } else {
        topNavBer.classList.remove('sticky')
      }
  })
}.call()
