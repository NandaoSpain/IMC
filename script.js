const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    buttonClose: document.querySelector('.close'),
    message: document.querySelector('.modal .title span'),

    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
        inputHeight.value = ''
        inputWeight.value = ''
        inputWeight.focus()
    }
}

form.onsubmit = function(e) {
    e.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const result = imc(weight, height)
    const message = `Seu IMC é de ${result}`
    Modal.message.innerHTML = message
    Modal.open()
}

Modal.buttonClose.onclick = () => {
    Modal.close()
}

function imc(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}