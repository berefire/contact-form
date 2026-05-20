const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ERROR_MESSAGES = Object.freeze({
    requiredField: "This field is required",
    requiredRadio: "Please select a query type",
    requiredCheckbox: "To submit this form, please consent to being contacted",
    invalidEmail: "Please enter a valid email address"
});


function createValidationResult(isValid, errorMessage = ""){
    return {
        isValid,
        errorMessage
    };
}

export function validateField(input){
    const inputValue = input?.trim() ?? "";

    if(!inputValue) {
        return createValidationResult(false, ERROR_MESSAGES.requiredField);
    }

    return createValidationResult(true);
}

export function validateEmail(email){
    const emailValue = email?.trim() ?? "";

    if(!emailValue) {
        return createValidationResult(false, ERROR_MESSAGES.requiredField);
    }

    if(!EMAIL_REGEX.test(emailValue)) {
        return createValidationResult(false, ERROR_MESSAGES.invalidEmail);
    }

    return createValidationResult(true);
}

export function validateRadioSelection(selectedOption){
    if(!selectedOption) {
        return createValidationResult(false, ERROR_MESSAGES.requiredRadio);
    }
    return createValidationResult(true);
}

export function validateCheckbox(isChecked){
    if(!isChecked) {
        return createValidationResult(false, ERROR_MESSAGES.requiredCheckbox);
    }   
    return createValidationResult(true);
}
