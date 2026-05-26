import { TOAST_DURATION, TOAST_TRANSITION } from "./constants.js";

export function showError(inputElement, messageElement, errorMessage) {
  if (!inputElement || !messageElement) {
    return;
  }

  messageElement.hidden = false;
  inputElement.classList.add("is-invalid");
  inputElement.setAttribute("aria-invalid", "true");
  messageElement.textContent = errorMessage;
  
}

export function clearError(inputElement, messageElement) {
  if (!inputElement || !messageElement) {
    return;
  }

  messageElement.hidden = true;
  inputElement.classList.remove("is-invalid");
  inputElement.removeAttribute("aria-invalid");
  messageElement.textContent = "";
  
}

export function createToastController() {
  let timeoutId = null;

  function showToast(toastElement, titleElement, descriptionElement, announcerElement, titleText, descriptionText) {
    clearTimeout(timeoutId);
if (titleElement) {
      titleElement.textContent = titleText;
    }

    if (descriptionElement) {
      descriptionElement.textContent = descriptionText;
      
    }

    if (announcerElement) {
      announcerElement.textContent = "";

      requestAnimationFrame(() => {
        announcerElement.textContent = `${titleText} ${descriptionText}`;
      });
    }

    toastElement.classList.remove("is-hidden");

    requestAnimationFrame(() => {
      toastElement.classList.add("is-visible");
      toastElement.focus();
      
    });

    timeoutId = setTimeout(() => {
      toastElement.classList.remove("is-visible");

      setTimeout(() => {
        toastElement.classList.add("is-hidden");
      }, TOAST_TRANSITION);
    }, TOAST_DURATION);
  }

  return {
    showToast,
  };
}
