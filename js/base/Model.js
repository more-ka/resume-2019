window.Model = function(options){
let resourceName = options.resourceName
  return {
    init:function(){
      var APP_ID = '9HOQuYpxQkbcsC81qKRHnKv3-gzGzoHsz'
      var APP_KEY = 'NJr4FD0aO0zM4Pr48hM5VDcu'      
      AV.init({ appId: APP_ID, appKey: APP_KEY })
    },
    fetch:function(){
      var query = new AV.Query(resourceName);
      return query.find()
    },
    save:function(object){
      var message = AV.Object.extend(resourceName);
        var message = new message(); 
        return message.save(object)
    }
  }
}

