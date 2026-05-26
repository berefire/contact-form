import { showError, clearError} from "./ui.js";
import { messagesToast } from "./constants.js";


/* ================ Event Handlers ================ */

export function handleSubmit(event, formFields, toastController, ToastElement, titleToast, descriptionToast, announcerElement) {
    
    event.preventDefault();

    const validationResults = formFields.map( field => {
        const result = field.validator(field.getValue());
        if (!result.isValid) {
            showError(field.element, field.errorElement, result.errorMessage);
        } else {
            clearError(field.element, field.errorElement);
        }

        return result;
    });

    const hasErrors = validationResults.some ( result => !result.isValid);

    if (hasErrors) return;

    toastController.showToast(ToastElement, titleToast, descriptionToast, announcerElement, messagesToast.title, messagesToast.description);
}

export function handleCloseToast(event, toastElement) {
    event.preventDefault();
    toastElement.classList.remove("is-visible");
    toastElement.classList.add("is-hidden");
}