import { TOAST_DURATION, TOAST_TRANSITION } from "./constants.js";

export function showError(inputElement, messageElement, errorMessage) {
    if (!inputElement) {
        console.warn("Input element not found for showing error:", inputElement);
        return;
    }

    inputElement.classList.add("is-invalid");
    inputElement.setAttribute("aria-invalid", "true");

    if (messageElement) {
        messageElement.textContent = errorMessage;
        messageElement.hidden = false;
    } else {
        console.warn( "Error message element not found for displaying error:", messageElement);
    }
}

export function clearError(inputElement, messageElement){
    if (!inputElement) {
        console.warn("Input element not found for showing error:", inputElement);
        return;
    }

    inputElement.classList.remove("is-invalid");
    inputElement.removeAttribute("aria-invalid");

    if (messageElement) {
        messageElement.textContent = "";
        messageElement.hidden = true;
    } else {
        console.warn("Error message element not found for clearing error:", messageElement);
    }
}

export function showToast(toastElement){
    
    clearTimeout(toastElement.toastTimeout);
    toastElement.hidden = false;

    requestAnimationFrame(() => {
        toastElement.classList.add("is-visible");
    });

    toastElement.toastTimeout = setTimeout(() => {

        toastElement.classList.remove("is-visible");

        setTimeout(() => { 
            toastElement.hidden = true;
        }, TOAST_TRANSITION);

    }, TOAST_DURATION);
}