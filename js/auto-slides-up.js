!function(){
  let specialTag = document.querySelectorAll('[data-x]')
  for(let i=0;i<specialTag.length;i++){
    specialTag[i].classList.add('offset')
  }
  findNearbyAddOffset()
  window.addEventListener('scroll', function () {
    findNearbyAddOffset()  
  })
  
  function findNearbyAddOffset(){
  let specialTag = document.querySelectorAll('[data-x]')
  let minIndex = 0
  for(let i=1;i<specialTag.length;i++){
    if(Math.abs(specialTag[i].offsetTop-window.scrollY) < Math.abs(specialTag[minIndex].offsetTop-window.scrollY)){
      minIndex = i
    }
  }
  specialTag[minIndex].classList.remove('offset')
  let id = specialTag[minIndex].id
  let a = document.querySelector('a[href="#'+ id +'"]')
  let li = a.parentNode
  let brother = li.parentNode.children
  for(let i=0;i<brother.length;i++){
    brother[i].classList.remove('highlight')
  }
  li.classList.add('highlight')
  }
}.call()