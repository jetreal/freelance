import { RIGHT_BUTTON_CLICK,
         CHANGE_LANG,
         CHANGE_POINTS_PLACE,
         CHANGE_TV,
         CHANGE_POINTS_PLACE_WITH_DELAY,
         LEFT_SLIDE,
         RIGHT_SLIDE,
         SHOW_SECTION1_TEXT,
         SHOW_SECTION4_TEXT,
         SHOW_SECTION5_TEXT,
         CHANGE_SECTION5_TEXT,
         SHOW_MAP,
         START_SHOW_SECTION5_TEXT,
         OFF_MAP
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

export function showSection1Text() {
    return {
        type: SHOW_SECTION1_TEXT
    }
}

export function showSection4Text() {
    return {
        type: SHOW_SECTION4_TEXT
    }
}
export function startShowSection5Text() {
    return {
        type: START_SHOW_SECTION5_TEXT
    }
}
export function showSection5Text() {
    return {
        type: SHOW_SECTION5_TEXT
    }
}

export function changeSection5Text() {
    return {
        type: CHANGE_SECTION5_TEXT
    }
}

export function showMap() {
    return {
        type: SHOW_MAP
    }
}

export function offMap() {
    return {
        type: OFF_MAP
    }
}