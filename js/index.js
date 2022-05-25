/*Funcion que capta datos de formulario*/

function captura(){
    var nombrecompra=document.getElementById("Nombre").value;
    var apellidocompra=document.getElementById("Apellido").value;
    var cantidadcompra=document.getElementById("Cantidad").value;
    var variedadcompra=document.getElementById("Option").value;
    if (cantidadcompra==""){
        alert ("La cantidad es necesaria");
        document.getElementById("Cantidad").focus();
    }
    else{
        if (variedadcompra=="Estudiante"){
            var resumen=cantidadcompra * 0.2 * 200;
            document.getElementById("resultado").value = resumen; 
        }
        else{ 
        if (variedadcompra=="Trainee"){
            var resumen=cantidadcompra * 0.5 * 200;
            document.getElementById("resultado").value = resumen; 
        }
        else{
            var resumen=cantidadcompra * 0.85 * 200;
            document.getElementById("resultado").value = resumen; 
        }
        }

    }
}

function borrar() {
    document.getElementById("Nombre").value = "";
    document.getElementById("Apellido").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("Cantidad").value = "";
    document.getElementById("Email").value = "";
  }

  function validarEmail (Email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test (Email)){
     alert("La dirección de email " + Email + " es correcta.");
    } else {
     alert("La dirección de email es incorrecta.");
    }
  }

/*
    alert (nombrecompra);
    alert (apellidocompra);
    alert (cantidadcompra);
    alert (variedadcompra);
    console.log (nombrecompra);
    console.log (apellidocompra);
    console.log (cantidadcompra);
    console.log (variedadcompra);
    }
}
*/
