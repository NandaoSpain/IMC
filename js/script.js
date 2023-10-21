import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { imc, notANumber } from "./utils.js"

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
