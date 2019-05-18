import { RIGHT_BUTTON_CLICK } from './Constants';


export function button1ClickAC(id) {
    return {
        type: RIGHT_BUTTON_CLICK,
        id
    }
}