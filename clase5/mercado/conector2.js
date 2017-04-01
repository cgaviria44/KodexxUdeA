function mercado(){
  var producto = document.getElementById('x').value;
  var anterior=document.getElementById('y').innerHTML;
     document.getElementById('y').innerHTML = anterior+'<li>'+producto+'</li>';
}
