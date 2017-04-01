//importando la biblioteca de express
const express = require('express')
const morgan = require('morgan')
//declaración de instancia de express
var app = express()
//se le indica a la app que va a correr morgan para logs
app.use(morgan('dev'))

//se define un puerto para correr, debe ser >1000
const port = 3000;

app.get('/',function(req,res){
    res.sendfile('./index.html')
    //res.send("Hola amiguitos cómo están?")
});

app.get('/mamita',function(req,res){
    res.send("muy bien!")
});

app.listen(port,function(){
  console.log("Hello World")
});
