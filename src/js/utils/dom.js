const selectors = {
    contactForm: ".contact-form",
    firstNameInputId: "#first-name",
    firstNameError: "#desc_name",
    lastNameInputId: "#last-name",
    lastNameError: "#desc_last-name",
    emailInputId: "#email",
    emailError: "#error_email",
    queryTypeFieldset: ".radio-selection",
    queryTypeError: "#desc_query-type",
    messageInputId: "#message",
    messageError: "#desc_message",
    consentCheckbox: "#consent",
    consentError: "#desc_consent",
    messageToast: ".message-section"
};


function assertElement(element, context){
    const isEmptyNodeList = ( element instanceof NodeList || element instanceof HTMLCollection) && element.length ===0;

    if (!element || isEmptyNodeList) {
        console.warn(`[DOM] Element not found for ${context}:`, element);
        return false;
    }
    return true;
}


export function addSafeListener(element, event, handler, context = "unknown") {
    if (!assertElement(element, context)) {
        return;
    }
    element.addEventListener(event, handler);
}

export function initDOMElements() {
    const DOM = {
        contactForm: document.querySelector(selectors.contactForm),
        firstNameInput: document.querySelector(selectors.firstNameInputId),
        firstNameError: document.querySelector(selectors.firstNameError),
        lastNameInput: document.querySelector(selectors.lastNameInputId),
        lastNameError: document.querySelector(selectors.lastNameError),
        emailInput: document.querySelector(selectors.emailInputId),
        emailError: document.querySelector(selectors.emailError),
        queryTypeFieldset: document.querySelector(selectors.queryTypeFieldset),
        queryTypeError: document.querySelector(selectors.queryTypeError),
        messageInput: document.querySelector(selectors.messageInputId),
        messageError: document.querySelector(selectors.messageError),
        consentCheckbox: document.querySelector(selectors.consentCheckbox),
        consentError: document.querySelector(selectors.consentError),
        messageToast: document.querySelector(selectors.messageToast)
    };

    Object.entries(DOM).forEach(([key, element]) => {
        assertElement(element, `initializing DOM element: ${key}`);
    });

    return Object.freeze(DOM);
}
