import { addSafeListener } from "../utils/dom.js";
import { createFormFields } from "./config.js";
import { handleSubmit } from "./events.js";

export function initContactForm(DOM) {
    const formFields = createFormFields(DOM);

    addSafeListener(DOM.contactForm, "submit", event => handleSubmit(event, formFields, DOM.messageToast), "contact form submit");
}