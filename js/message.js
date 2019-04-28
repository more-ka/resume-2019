!function(){
  let view = document.querySelector('.message')
  let model = {
    init:function(){
      var APP_ID = '9HOQuYpxQkbcsC81qKRHnKv3-gzGzoHsz'
      var APP_KEY = 'NJr4FD0aO0zM4Pr48hM5VDcu'      
      AV.init({ appId: APP_ID, appKey: APP_KEY })
    },
    fetch:function(){
      var query = new AV.Query('Message');
      return query.find()
    },
    save: function(name,content){
      var message = AV.Object.extend('Message');
        var message = new message(); 
        if(name !== '' && content !== ''){return message.save({
          'name':name,
          'content': content
        })
        
    }
    }
  }
  let contorller = {
    view:null,
    model:null,
    init:function(view,model){
      this.view = view
      this.model = model
      this.model.init()
      this.readData()
      this.form = view.querySelector('#messageForm')
      this.bindEvents()
      this.saveData()
    },
    readData:function(){      
      model.fetch().then(function (information) {
        var array = information.map((item)=>item.attributes)
        array.forEach((item)=>{
          let li = document.createElement('li')
          li.innerHTML = `${item.name}:  ${item.content}`
          let messageList = view.querySelector('#messageList')
          messageList.append(li)
        })
        })
    },
    bindEvents:function(){
      this.form.addEventListener('submit',(e)=>{
        e.preventDefault()
        this.saveData()
      })
    },
    saveData: function(){
      let myForm = this.form
      let content = myForm.querySelector(['input[name=content]']).value
        let name = myForm.querySelector('input[name=name]').value
        this.model.save(name,content).then((object)=>{
          let li = document.createElement('li')
          li.innerHTML = `${object.attributes.name}:  ${object.attributes.content}`
          let messageList = document.querySelector('#messageList')
          messageList.append(li)
          myForm.querySelector(['input[name=content]']).value = ''
          myForm.querySelector(['input[name=name]']).value = ''
        })}
    }
  
  contorller.init.call(contorller,view,model)
}.call()
