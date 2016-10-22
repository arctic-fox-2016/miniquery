let express = require('express')
let app = express()
let cors = require('cors')

app.use(cors())

app.get('/', function(req,res,next){
  res.json({message:'success'})
})

app.listen(9000, function(){
  console.log('listening on 9000')
})
