function operacions(x, y, z) {
    var x = parseInt(document.getElementById("x").value);
    var y = document.getElementById("y").value;
    var z = parseInt(document.getElementById("z").value);
    var resultado=0;

    switch (y) {
            case '+':
                resultado = x + z;
                break;
            case '-':
                resultado = x - z;
                break;
            case '*':
                resultado = x * z;
                break;
            case '/':
                resultado = x / z;
                break;
        }
        document.getElementById('r').value = resultado;
    }
