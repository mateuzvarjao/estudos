const dataNascimento = document.querySelector('#nascimento');

dataNascimento.addEventListener('blur', (evento) => {
    validaDataNascimento(evento.target)
})

function validaDataNascimento(input) {
    const dataRecebida = new Date (input.value)
    let mensagem = ''

    if (!maiorQue18(dataRecebida)) {
    mensagem = 'Você só pode se cadastrar se for maior de idade'
    }
    
    input.setCustomValidity(mensagem)
}

function maiorQue18(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}