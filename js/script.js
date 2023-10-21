import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"

const form = document.querySelector('form')
export const inputWeight = document.querySelector('#weight')
export const inputHeight = document.querySelector('#height')



form.onsubmit = function(e) {
    e.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notANumber(weight) || notANumber(height)

    if (showAlertError) {
        AlertError.open()
        return;
    } 
    
    AlertError.close() 

    const result = imc(weight, height)
    const message = `Seu IMC é de ${result}`
    Modal.message.innerHTML = message
    Modal.open() 
}


function notANumber(value) {
    return isNaN(value) || value == ''
}


function imc(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}