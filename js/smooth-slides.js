!function(){
  var view = Find('nav.menu')
  var contorller = {
    view: null,
    init: function(view){
      this.view = view
      this.scrollToElement()
      this.initAnimation()
      this.triggerElement()
    },
    scrollToElement: ()=>{
      let aTags = view.querySelectorAll('ul>li>a')

      for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function (x) {
          x.preventDefault()
          let a = x.currentTarget
          let href = a.getAttribute('href')
          let element = document.querySelector(href)
          let top = element.offsetTop
          let currentTop = window.scrollY //现在的位置
          let targetTop = top - 80
          let s = targetTop - currentTop
          var coords = { y: currentTop };
          let t = Math.abs((s / 100) * 300) //每移动100px耗费0.3s
          if (t > 500) { t = 500 }
          var tween = new TWEEN.Tween(coords)
            .to({ y: targetTop }, t)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function () {
              window.scrollTo(0, coords.y)
            })
            .start();
        }
      }
    },
    initAnimation: ()=>{
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      requestAnimationFrame(animate);
    },
    triggerElement:()=>{
      let liTags = view.querySelectorAll('.menuTrigger')
      for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function (x) {
          x.currentTarget.classList.add('active')
        }
        liTags[i].onmouseleave = function (x) {
          x.currentTarget.classList.remove('active')
        }
      }
    }
  }
  contorller.init(view)
}.call()
