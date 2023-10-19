const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const modalWrapper = document.querySelector('.modal-wrapper')
const modalBtnClose = document.querySelector('.close')
const modalMessage = document.querySelector('.modal .title span')



form.onsubmit = function(e) {
    e.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const result = imc(weight, height)
    const message = `Seu IMC é de ${result}`
    modalMessage.innerHTML = message
    modalWrapper.classList.add('open')
}

modalBtnClose.onclick = () => {
    modalWrapper.classList.remove('open')
    inputHeight.value = ''
    inputWeight.value = ''
    inputWeight.focus()
}

function imc(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}