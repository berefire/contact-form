import {
  TOAST_DURATION,
  TOAST_TRANSITION,
} from "./constants.js";

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

export function createToastController({
  toastElement,
  announcerElement,
  closeButton,
}) {
  if (!toastElement || !announcerElement || !closeButton) {
    throw new Error("[Toast] Missing required elements.");
  }

  let timeoutId = null;

  const titleElement = toastElement.querySelector(".title-message");
  const descriptionElement = toastElement.querySelector(".text-message");

  function showToast({title, description}) {
    clearTimeout(timeoutId);

    titleElement.textContent = title;
    descriptionElement.textContent = description;

    announcerElement.textContent = "";

    requestAnimationFrame(() => {
      announcerElement.textContent = `${title} ${description}`;
    });

    toastElement.classList.remove("is-hidden");

    requestAnimationFrame(() => {
      toastElement.classList.add("is-visible");
      closeButton?.focus();
    });

    timeoutId = setTimeout(() => {
      hideToast();
    }, TOAST_DURATION);
  }

  function hideToast() {
    toastElement.classList.remove("is-visible");
    setTimeout(() => {
      toastElement.classList.add("is-hidden");
    }, TOAST_TRANSITION);
  }

  return {
    showToast,
    hideToast,
  };
}
