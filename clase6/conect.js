var tiempo=0
var x
function crono() {
    tiempo=tiempo+1
    //alert(tiempo)
}

function tiempos(){

var seg = x%60
var min = x/60
alert (tiempo+min+":"+seg)

}
function iniciar(){
x = setInterval(crono,1000)
}