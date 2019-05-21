import { RIGHT_BUTTON_CLICK, CHANGE_LANG, CHANGE_POINTS_PLACE, CHANGE_TV } from './Constants';


export function button1ClickAC(id) {
    return {
        type: RIGHT_BUTTON_CLICK,
        id
    }
}

export function changeLang() {
    return {
        type: CHANGE_LANG
    }
}

export function changePointsPlace() {
    return {
        type: CHANGE_POINTS_PLACE
    }
}

export function changeTV() {
    return {
        type: CHANGE_TV
    }
}