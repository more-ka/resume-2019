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
    li.innerHTML = `${item.name}:  ${item.content}`
    let messageList = document.querySelector('#messageList')
    messageList.append(li)
  })
  })
 
var myForm = document.querySelector('#messageForm')
myForm.addEventListener('submit',(e)=>{
  e.preventDefault()
  let content = myForm.querySelector(['input[name=content]']).value
  let name = myForm.querySelector('input[name=name]').value
  var message = AV.Object.extend('Message');
  var message = new message(); message.save({
    'name':name,
    'content': content
  }).then(function(object) {
    let li = document.createElement('li')
    li.innerHTML = `${object.attributes.name}:  ${object.attributes.content}`
    let messageList = document.querySelector('#messageList')
    messageList.append(li)
    myForm.querySelector(['input[name=content]']).value = ''
    myForm.querySelector(['input[name=name]']).value = ''
  })
})
