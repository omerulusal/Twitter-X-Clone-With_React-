import { _setColor, _setFontSize, _setbackground } from ".";
import { store } from "../index";

export const setBacgroundColor = data => store.dispatch(_setbackground(data))
export const setColor = data => store.dispatch(_setColor(data))
export const setFontSize = data => store.dispatch(_setFontSize (data))