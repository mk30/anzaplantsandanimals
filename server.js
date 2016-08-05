var api = require('./')
//api.init()
api.add(function (error){
  if (error) return console.error('error: ', error)
  api.showall(
    function (error, data) {
      if (error) return console.error('error: ', error)
      console.log(data)
    }
  )
})
