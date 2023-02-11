
const botaoConclui = () => {
    const botaoC = document.createElement('button')
    
    botaoC.classList.add('check-button')
    botaoC.innerText = 'concluir'
    botaoC.addEventListener('click', concluirTarefa) 

    return botaoC
}

const concluirTarefa = (evento) => {

    const botaoC = evento.target

    const tarefaCompleta = botaoC.parentElement

    tarefaCompleta.classList.toggle('done')

}

export default botaoConclui