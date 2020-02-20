function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var nota
	nota = parseInt(Math.random()*11+1);

	if(nota >=10){
		alert(nota + " Excelente");
	}
else if(nota >= 4 && nota <9){
	alert(nota + " Aprobo");
}
else{
	alert(nota + " Vamos, la proxima se puede");
}
}//FIN DE LA FUNCIÓN