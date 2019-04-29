!function(){
  let view = Find('.message')
  var model = Model({resourceName:'Message'})
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
        if(name !== '' && content !== ''){
          this.model.save({'name':name,'content': content})
        .then(function(object){
          let li = document.createElement('li')
          li.innerHTML = `${object.attributes.name}:  ${object.attributes.content}`
          let messageList = document.querySelector('#messageList')
          messageList.append(li)
          myForm.querySelector(['input[name=content]']).value = ''
          myForm.querySelector(['input[name=name]']).value = ''
        })
        }}
    }
  
  contorller.init.call(contorller,view,model)
}.call()
