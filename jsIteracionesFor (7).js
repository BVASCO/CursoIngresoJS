function mostrar()
{

    var numero;
    var contadorDiv = 0;
    numero = parseInt(prompt("ingrese unnumero: "));
    while (isNaN(numero)){
        numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
    }
    for(var i = 1; i <= numero; i++){
        if(numero % i == 0){
            console.log(i);
            contadorDiv++
        }
    }
    console.log("Cantidad de divisores: " + contadorDiv);


}//FIN DE LA FUNCIÓN