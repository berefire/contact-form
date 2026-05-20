import { validateField, validateEmail, validateRadioSelection, validateCheckbox } from "./validation.js";


export function createFormFields(DOM){
    return [
        {
            element: DOM.firstNameInput,
            errorElement: DOM.firstNameError,
            validator: validateField,
            getValue: () => DOM.firstNameInput.value.trim(),
        },
        {
            element: DOM.lastNameInput,
            errorElement: DOM.lastNameError,
            validator: validateField,
            getValue: () => DOM.lastNameInput.value.trim(),
        },
        {
            element: DOM.emailInput,
            errorElement: DOM.emailError, 
            validator: validateEmail,
            getValue: () => DOM.emailInput.value.trim(),
        }, 
        {
            element: DOM.queryTypeFieldset,
            errorElement: DOM.queryTypeError,
            validator: validateRadioSelection,
            getValue: () => {
                const selectedRadio = Array.from(DOM.queryTypeFieldset.querySelectorAll("input[name='query-type']")).find(radio => radio.checked);
                return selectedRadio ? selectedRadio.value : "";
            },
        },
        {
            element: DOM.messageInput,
            errorElement: DOM.messageError,
            validator: validateField,
            getValue: () => DOM.messageInput.value.trim(),
        },
        {
            element: DOM.consentCheckbox,
            errorElement: DOM.consentError,
            validator: validateCheckbox,
            getValue: () => DOM.consentCheckbox.checked,
        }

    ]
}