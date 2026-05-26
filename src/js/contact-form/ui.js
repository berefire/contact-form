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
  inputElement.setAttribute("aria-invalid", "false");
  messageElement.textContent = "";
  messageElement.hidden = true;
}

export function createToastController() {
  let timeoutId = null;

  function showToast(toastElement, titleElement, descriptionElement, announcerElement, titleToast, descriptionToast) {
    clearTimeout(timeoutId);
if (titleElement) {
      titleElement.textContent = titleToast;
    }

    if (descriptionElement) {
      descriptionElement.textContent = descriptionToast;
      
    }

    if (announcerElement) {
      announcerElement.textContent = "";

      requestAnimationFrame(() => {
        announcerElement.textContent = `${titleToast} ${descriptionToast}`;
      });
    }

    toastElement.classList.remove("is-hidden");

    requestAnimationFrame(() => {
      toastElement.classList.add("is-visible");
      
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
