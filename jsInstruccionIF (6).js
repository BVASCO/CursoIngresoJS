function mostrar()
{
//tomo la edad  

var edad;
edad = parseInt(document.getElementById("edad").value);

if(edad >= 13 && edad <= 17)
{
    alert("Es adolescente");
}
if(edad < 13){
    alert("Es un niñe");
}
if(edad >= 18){
    alert("Es mayor de edad");
}



}//FIN DE LA FUNCIÓN