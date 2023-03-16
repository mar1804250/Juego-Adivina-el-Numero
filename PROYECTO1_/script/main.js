let aleatorio = Math.floor(Math.random() * 100) + 1;
const num_ingresados = document.querySelector('.num_ingresados');
const ultimoResult = document.querySelector('.ultimoResult');
const pistas = document.querySelector('.pistas');
const btn_probar_num = document.querySelector('.btn_probar_num');
const campo_num = document.querySelector('.campo_num');
let contador_num = 1;
let btnReset;



function validarNumeroIngresado(){
    const numeroIngresado = Number(campo_num.value);
    num_ingresados.textContent += numeroIngresado + '|';

    if (contador_num ===1){
        num_ingresados.textContent = 'Numeros Ingresados Previamente: ' ;
    }
    

    if (numeroIngresado === aleatorio){
        ultimoResult.textContent = 'FELICIDADES lo has logrado!';
        ultimoResult.style.backgroundColor = 'chartreuse';
        pistas.textContent = '';
        reiniciar();
    } else if (contador_num === 10){
        ultimoResult.textContent = 'AGOTASTE EL NUMERO DE INTENTOS: PERDISTE';
        pistas.textContent = '';
        reiniciar();
    } else {
        ultimoResult.textContent = 'EQUIVOCADO';
        ultimoResult.style.backgroundColor = 'red';
        if (numeroIngresado < aleatorio){
            pistas.textContent = 'El numero es más grande';
        }
        if(numeroIngresado > aleatorio){
            pistas.textContent = `El numero es más chico`;
        }
    }
    document.getElementById("display-resultado").innerHTML = `El numero de intentos es: ${contador_num} DE 10.`

    contador_num++;
    campo_num.value = '';
    campo_num.focus();

    prueba.textContent = aleatorio;
}

btn_probar_num.addEventListener('click', validarNumeroIngresado);

function reiniciar() {
    campo_num.disabled = true;
    btn_probar_num.disabled = true;
    btnReset = document.createElement('button');
    btnReset.textContent = 'REINICIAR JUEGO';
    document.body.appendChild(btnReset);
    btnReset.addEventListener('click', reiniciar_juego);
}

function reiniciar_juego(){
    contador_num = 1;
    const reiniciar_componentes = document.querySelectorAll('.div_result p');
    for (const resetParams of reiniciar_componentes){
        resetParams.textContent = '';
    }

    btnReset.parentNode.removeChild(btnReset);
    campo_num.disabled = false;
    btn_probar_num.disabled = false;
    campo_num.value = '';
    campo_num.focus();
    ultimoResult.style.backgroundColor = 'withe';
    aleatorio = Math.floor(Math.random() * 100) + 1;
}