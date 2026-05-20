import { showError, clearError } from "./ui.js";



/* ================ Event Handlers ================ */

export function handleSubmit(event, formFields){
    
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

    console.log("Form submitted successfully!");
}