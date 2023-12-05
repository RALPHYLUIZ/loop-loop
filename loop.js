let contador = 0;
let numero;
let resultado;
let linha;

function tabuadaWhile(){
    numero  = parseInt(document.querySelector('#slcNumero').value);
    //EXEMPLO DE LOOP WHILE:
    while(contador <= 10){
        //console.log('VALOR DO CONTADOR: ' + contador);
        //contador = contador + 1
        //console.log('8 X ' + contador + ' = ' + (8*contador));
        resultado = numero + ' X ' + contador + ' = ' + (numero * contador);
        // console.log(resultado);
        linha += '<tr><td>' + resultado + '</td></tr>';
        console.log(linha);
        contador++;
    }

    document.querySelector('#resultadoTabuada').innerHTML = linha;
}

