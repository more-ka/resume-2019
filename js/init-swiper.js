!function(){
  var view = Find('.mySlides')
 var contorller = function(view){
  var mySwiper = new Swiper (view.querySelector('.swiper-container'), {
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }) 

 }
contorller.call(undefined,view)
}.call()