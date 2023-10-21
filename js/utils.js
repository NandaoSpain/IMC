import { Modal } from "./modal.js"
export function notANumber(value) {
    return isNaN(value) || value == ''
}


export function imc(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

export function displayResulMessage(result) {
    const message = `Seu IMC é de ${result}`
    Modal.message.innerHTML = message
    Modal.open() 
}