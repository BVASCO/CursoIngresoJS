function mostrar()
{var numero
	var contador=0;
	var acumulador=0;
var promedio
while(contador < 5){
numero = parseInt(prompt("Ingrese un numero: "));
	while(isNaN(numero)){
		numero = parseInt(prompt("Eso no es un numero, ingresa otro"));
}

	contador++;
	
}
	document.getElementById('suma').value= acumulador;
document.getElementById("promedio") = acumulador / 5;



}//FIN DE LA FUNCIÓN