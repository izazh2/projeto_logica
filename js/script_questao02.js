//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    let num1 =  parseFloat(form_num.get('num1'))
    let num2 =  parseFloat(form_num.get('num2'))

    let media = parseFloat(num1 * num2) / parseFloat(2)
    let tinta = parseFloat(media / 2)


    divResultado.innerHTML = `Á área a ser pintada ${media.toFixed(2).replace('.',',')} e a
    quantidade de tinta necessária para o serviço ${tinta.toFixed(2).replace('.',',')}`

})
