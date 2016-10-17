let express = require('express')
let app = express()
let cors = require('cors')

app.use(cors())

app.get('/', function(req,res,next){
  res.json({message:'berhasil'})
})

app.listen(3000, function(){
  console.log('listening on 3000')
})
