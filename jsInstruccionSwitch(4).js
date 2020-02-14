function mostrar()
{
//tomo la edad  
var mes
mes = document.getElementById('mes').value;
switch (mes) {
case "Febrero":
    alert("Este mes tiene 28 dias");
break;
case "Enero":
case "marzo":
case "Mayo":
case "Julio":
case "Agosto":
case "Octubre":
case "Diciembre":
    alert("Este Mes tiene 31 dias")
    break;
case "Abril":
case "Junio":
case "Noviembre":
case "Septiembre":
alert("Este mes tiene 30 dias");
break; }     
}

//alert (mesDelAño);
	
	



//FIN DE LA FUNCIÓN