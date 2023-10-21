import { inputHeight } from "./script.js"
import { inputWeight } from "./script.js"

export const Modal = {
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

Modal.buttonClose.onclick = () => {
    Modal.close()
}

window.addEventListener('keydown', e => {
    if(e.key == 'Escape'){
        Modal.close()
    }
})