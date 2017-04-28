var express=require('express');
var app = express();

app.get('/', function (req, res){ //cuando hago app.get me lleva a la raiz	

res.sendfile("index.html");
});

app.get('/cliente', function (req, res){ //cuando hago app.get me lleva a la raiz	

res.sendfile("cliente.html");
});
app.get('/empleado', function (req, res){ //cuando hago app.get me lleva a la raiz	

res.sendfile("empleado.html");
});

app.listen(3000, function(){
	console.log('Example app listening on port 3000');
});	