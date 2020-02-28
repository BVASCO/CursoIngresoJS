function mostrar()
{
    var numero;
    var contadorPares = 0;
    numero = parseInt(prompt("ingrese unnumero: "));
    while (isNaN(numero)){
        numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
    }
    for(var i = 1; i <= numero; i++){
        if(i % 2 == 0){
            console.log(i);
            contadorPares++
        }
    }
    console.log("Cantidad de pares: " + contadorPares);

}//FIN DE LA FUNCIÓN