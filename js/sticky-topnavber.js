!function(){
  var view = Find('#topNavBer')
  var contorller = {
    view: null,
    init: function(view){
      this.view = view
      this.bindEvents()
    },
    bindEvents:function(){
      window.addEventListener('scroll',()=>{
        if (window.scrollY > 0) {
            this.active()
          } else {
            this.deActive()
          }
      })
    },
    active: function(){
      this.view.classList.add('sticky')
    },
    deActive: function(){
      this.view.classList.remove('sticky')
    }
  }
  contorller.init.call(contorller,view)
}.call()
