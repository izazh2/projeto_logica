//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    let num1 =  parseFloat(form_num.get('num1'))
    let num2 =  parseFloat(form_num.get('num2'))
    let num3 =  parseFloat(form_num.get('num3'))

    let litros = parseFloat(num1 / num2) / parseFloat(3)
    let total = parseFloat( litros * num3 )

    divResultado.innerHTML = `A quantidade de combustível necessário para percorrer
    o trajeto ${litros.toFixed(2).replace('.',',')} o valor total a pagar com combustível para esse
    deslocamento ${total.toFixed(2).replace('.',',')}`

})