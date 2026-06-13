//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    let nome = form_num.get('nome')
    let num1 =  parseFloat(form_num.get('num1'))
    let num2 =  parseFloat(form_num.get('num2'))

    console.log(nome, num1, num2)

    let imc = parseFloat(num1) / parseFloat(num2 * num2)

    if (imc < 20) {
        divResultado.innerHTML = `<p>${nome}, seu IMC é ${imc.toFixed(2)} e você está abaixo do peso.</p>`
    } else if ((imc >= 20) && (imc < 25)) {
        divResultado.innerHTML = `<p>${nome}, seu IMC é ${imc.toFixed(2)} e você está com peso normal.</p>`
    } else if ((imc >= 25) && (imc < 30)) {
        divResultado.innerHTML = `<p>${nome}, seu IMC é ${imc.toFixed(2)} e você está acima do peso.</p>`
    }else if ((imc >= 30) && (imc < 35)) {
        divResultado.innerHTML = `<p>${nome}, seu IMC é ${imc.toFixed(2)} e você está com obesidade grau 1.</p>`
    } else if ((imc >= 35) && (imc < 40)) {
        divResultado.innerHTML = `<p>${nome}, seu IMC é ${imc.toFixed(2)} e você está com obesidade grau 2.</p>`
    }
})