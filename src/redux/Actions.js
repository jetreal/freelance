import { RIGHT_BUTTON_CLICK,
         CHANGE_LANG,
         CHANGE_POINTS_PLACE,
         CHANGE_TV,
         CHANGE_POINTS_PLACE_WITH_DELAY,
         LEFT_SLIDE,
         RIGHT_SLIDE
          } from './Constants';

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
export function changePointsPlaceDelay() {
    return {
        type: CHANGE_POINTS_PLACE_WITH_DELAY
    }
}
export function changeTV() {
    return {
        type: CHANGE_TV
    }
}
export function leftSlide() {
    return {
        type: LEFT_SLIDE
    }
}
export function rightSlide() {
    return {
        type: RIGHT_SLIDE
    }
}