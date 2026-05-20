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
        messageElement.setAttribute("role", "alert");
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
        messageElement.removeAttribute("role");
    } else {
        console.warn("Error message element not found for clearing error:", messageElement);
    }
}