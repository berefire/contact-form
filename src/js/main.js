import "@styles/main.css";

import { initDOMElements } from "./utils/dom.js";
import { initContactForm } from "./contact-form/index.js";

const DOM = initDOMElements();
initContactForm(DOM);