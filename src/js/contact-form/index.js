import { addSafeListener } from "../utils/dom.js";
import { createFormFields } from "./config.js";
import { handleSubmit } from "./events.js";
import { createToastController } from "./ui.js";

const toastController = createToastController();

export function initContactForm(DOM) {
    const formFields = createFormFields(DOM);

    addSafeListener(DOM.contactForm, "submit", event => handleSubmit(event, formFields, toastController, DOM.messageToast), "contact form submit");
}