function mostrar()
{
    var mes
    mes = document.getElementById('mes').value;
switch (mes) {
    case "Febrero":
        alert("Este mes no tiene mas de 29 dias");
    break;
case "Enero":
case "marzo":
case "Abril":
case "Mayo":
case "Junio":
case "Julio":
case "Agosto":
case "Septiembre":
case "Octubre":
case "Noviembre":
case "Diciembre":
    alert("Este mes tiene 30 dias o más");
    break; }     
}