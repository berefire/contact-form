import { addSafeListener } from "../utils/dom.js";
import { createFormFields } from "./config.js";
import { handleSubmit, handleCloseToast } from "./events.js";
import { createToastController } from "./ui.js";

const toastController = createToastController();

export function initContactForm(DOM) {
    const formFields = createFormFields(DOM);

    addSafeListener(DOM.contactForm, "submit", event => handleSubmit(event, formFields, toastController, DOM.messageToast, DOM.titleToast, DOM.descriptionToast, DOM.announcerElement), "contact form submit");
    addSafeListener(DOM.closeToastButton, "click", event => handleCloseToast(event, DOM.messageToast), "toast close button click");
}