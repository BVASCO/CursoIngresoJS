function mostrar()
{
//tomo la edad  
var edad
var esCiv
edad = parseInt(document.getElementById("edad").value);
esCiv = document.getElementById("estadoCivil").value;
    if(edad < 18 && (esCiv == "Soltero")) {
        alert("Es mayor y NO es soltero");
    }
	


}//FIN DE LA FUNCIÓN