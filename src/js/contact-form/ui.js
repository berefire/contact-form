import { TOAST_DURATION, TOAST_TRANSITION } from "./constants.js";

export function showError(inputElement, messageElement, errorMessage) {
  if (!inputElement || !messageElement) {
    return;
  }

  inputElement.classList.add("is-invalid");
  inputElement.setAttribute("aria-invalid", "true");
  messageElement.textContent = errorMessage;
  messageElement.hidden = false;
}

export function clearError(inputElement, messageElement) {
  if (!inputElement || !messageElement) {
    return;
  }

  inputElement.classList.remove("is-invalid");
  inputElement.removeAttribute("aria-invalid");
  messageElement.textContent = "";
  messageElement.hidden = true;
}

export function createToastController() {
  let timeoutId = null;

  function showToast(toastElement) {
    clearTimeout(timeoutId);
    toastElement.hidden = false;

    requestAnimationFrame(() => {
      toastElement.classList.add("is-visible");
    });

    timeoutId = setTimeout(() => {
      toastElement.classList.remove("is-visible");

      setTimeout(() => {
        toastElement.hidden = true;
      }, TOAST_TRANSITION);
    }, TOAST_DURATION);
  }

  return {
    showToast,
  };
}
