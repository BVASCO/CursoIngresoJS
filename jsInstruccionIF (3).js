function mostrar()
{
//tomo la edad  
var edad;
edad = parseInt(document.getElementById("edad").value);

if(edad >= 18)
{
    alert("Mayor de Edad");
}
else
{alert("Menor de Edad")}
}//FIN DE LA FUNCIÓN