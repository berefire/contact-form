import { addSafeListener } from "../utils/dom.js";
import { createFormFields } from "./config.js";
import { handleSubmit, handleCloseToast } from "./events.js";
import { createToastController } from "./ui.js";

export function initContactForm(DOM) {
    const formFields = createFormFields(DOM);
    const toastController = createToastController({
        toastElement: DOM.messageToast,
        announcerElement: DOM.announcerElement,
        closeButton: DOM.closeToastButton,
    });

    addSafeListener(DOM.contactForm, "submit", event => handleSubmit(event, formFields, toastController), "contact form submit");
    addSafeListener(DOM.closeToastButton, "click", event => handleCloseToast(event, toastController), "toast close button click");
}