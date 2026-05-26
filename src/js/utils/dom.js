import { requiredElements} from "../contact-form/constants.js"

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
    messageToast: ".message-section",
    titleToast: "#message-sent-title",
    descriptionToast: ".text-message",
    announcerElement: "#sr-announcer"
};

function assertElement(element) {
   const isCollection = element instanceof NodeList || element instanceof HTMLCollection;
   
   const isEmptyCollection = isCollection && element.length === 0;

   return (!!element && !isEmptyCollection);
}


export function addSafeListener(element, event, handler, context = "unknown") {
    if (!assertElement(element)) {
        return;
    }

    const isCollection = element instanceof NodeList || element instanceof HTMLCollection;

    if (isCollection) {
        [...element].forEach(item => item.addEventListener(event, handler));
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
        messageToast: document.querySelector(selectors.messageToast),
        titleToast: document.querySelector(selectors.titleToast),
        descriptionToast: document.querySelector(selectors.descriptionToast),
        announcerElement: document.querySelector(selectors.announcerElement)
    };

    Object.entries(DOM).forEach(([key, element]) => {
        
        const isRequired = requiredElements.includes(key);

        if( isRequired && !assertElement(element)) {
            throw new Error(`[DOM] Missing required element: ${key}`);
        }

    });

    return Object.freeze(DOM);
}
