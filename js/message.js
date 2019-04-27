var APP_ID = '9HOQuYpxQkbcsC81qKRHnKv3-gzGzoHsz';
var APP_KEY = 'NJr4FD0aO0zM4Pr48hM5VDcu';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
var query = new AV.Query('Message');
query.find().then(function (information) {
  var array = information.map((item)=>item.attributes)
  array.forEach((item)=>{
    let li = document.createElement('li')
    li.innerHTML = item.content
    let messageList = document.querySelector('#messageList')
    messageList.append(li)
  })
  })
 




var myForm = document.querySelector('#messageForm')
myForm.addEventListener('submit',(e)=>{
  e.preventDefault()
  let content = myForm.querySelector(['input[name=content]']).value
  var message = AV.Object.extend('Message');
  var message = new message(); message.save({
    'content': content
  }).then(function(object) {
    window.location.reload()
  })
})
