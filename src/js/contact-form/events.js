import { showError, clearError } from "./ui.js";
import { messagesToast } from "./constants.js";

/* ================ Event Handlers ================ */

export function handleSubmit(event, formFields, toastController) {
  event.preventDefault();

  const validationResults = formFields.map((field) => {
    const result = field.validator(field.getValue());
    if (!result.isValid) {
      showError(field.element, field.errorElement, result.errorMessage);
    } else {
      clearError(field.element, field.errorElement);
    }

    return result;
  });

  const hasErrors = validationResults.some((result) => !result.isValid);

  if (hasErrors) return;
  toastController.showToast(messagesToast);
}

export function handleCloseToast(event, toastController) {
  event.preventDefault();
  toastController.hideToast();
}
