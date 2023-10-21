import { inputHeight } from "./script.js"
import { inputWeight } from "./script.js"
export const AlertError = {
    element: document.querySelector('.alert-error'),
    open() {
        AlertError.element.classList.add('open')
        inputHeight.value = ''
        inputWeight.value = ''
    },
    close() {
        AlertError.element.classList.remove('open')
    }
}