import { RIGHT_BUTTON_CLICK,
     CHANGE_LANG,
      CHANGE_POINTS_PLACE,
       CHANGE_TV,
        CHANGE_POINTS_PLACE_WITH_DELAY,
         LEFT_SLIDE,
        RIGHT_SLIDE, 
        INITIAL_SLIDE_LEFT,
        INITIAL_SLIDE_RIGHT} from "./Constants";


let initialState = {
    buttons: [
    { id: 1, name: 'button 1', isActiveColor: true},
    { id: 2, name: 'button 2', isActiveColor: false},
    { id: 3, name: 'button 3', isActiveColor: false},
    { id: 4, name: 'button 4', isActiveColor: false},
    { id: 5, name: 'button 5', isActiveColor: false},
    { id: 6, name: 'button 6', isActiveColor: false}
],
activeButtonNum: 1,
tvIndex: 1,
texts: [
    { id: 1, textRu: 'text 1', textEn: 'text on english1'},
    { id: 2, textRu: 'text 2', textEn: 'text on english2'},
    { id: 3, textRu: 'text 3', textEn: 'text on english3'},
    { id: 4, textRu: 'text 4', textEn: 'text on english4'},
    { id: 5, textRu: 'text 5', textEn: 'text on english5'},
    { id: 6, textRu: 'text 6', textEn: 'text on english6'}
],
isLang: false,
langBtnNames: [ 'ru', 'en' ],
phoneNum: '+ 7 952 964 57 21',
headerText: [ 'создание НЕ шаблонных сайтов', 'Sites and Landing pages creating'],
pointsPosition: 0, // 0 - 2
pointsPositionWithDelay: 0, // 0 - 2
slidePosition: 'center',
sliderContent: [
	{"text":"1", "url":"/images/soundRight.jpg"},
	{"text":"2", "url":"/images/soundLeft.jpg"},
	{"text":"3", "url":"/images/3.jpg"},
	{"text":"4", "url":"/images/4.jpg"},
	{"text":"5", "url":"/images/5.jpg"}
],
sliderContentForShow: [
    {"text":"1", "url":"/images/soundRight.jpg"},
	{"text":"2", "url":"/images/soundLeft.jpg"},
	{"text":"3", "url":"/images/3.jpg"}
],

sliderBgImg: "/images/soundLeft.jpg",
sliderText: 'text1'
}

const ButtonsReducer = (state = initialState, action) => {
    switch (true) {
        case (action.type === RIGHT_BUTTON_CLICK): {
            if (state.buttons[action.id - 1].isActiveColor) {
                let copyState = {...state}
                copyState.activeButtonNum = action.id
                return copyState
            } else {
                let copyState = {...state}
                for (let i = 0; i < copyState.buttons.length; i++) {
                    copyState.buttons[i].isActiveColor = false
                }
                copyState.buttons[action.id - 1].isActiveColor = true
                copyState.activeButtonNum = action.id
                return copyState
            }
            return {...state}
        }
        case (action.type === CHANGE_LANG) : {
            let copyState = {...state}
            copyState.isLang = !state.isLang;
            return copyState
        }
        case (action.type === CHANGE_POINTS_PLACE): {
            let stateCopy = {...state}
            // stateCopy.pointsPostion = state.pointsPosition
            stateCopy.pointsPositionWithDelay = null
            stateCopy.pointsPosition++
            if (stateCopy.pointsPosition > 2) {
                stateCopy.pointsPosition = 0
            }
            return stateCopy
        }
        case (action.type === CHANGE_POINTS_PLACE_WITH_DELAY): {
            let stateCopy = {...state}
            stateCopy.pointsPositionWithDelay = stateCopy.pointsPosition
            return stateCopy
        }

        case (action.type === CHANGE_TV):{
            let StateCopy = {...state}
            StateCopy.tvIndex++
            if (StateCopy.tvIndex > 4) {
                StateCopy.tvIndex = 1
                console.log(StateCopy.tvIndex)
            }
            console.log(StateCopy.tvIndex)
            return StateCopy
        }
        case (action.type === LEFT_SLIDE) : {
            let StateCopy = {...state}
            StateCopy.slidePosition = 'left'
            StateCopy.sliderBgImg = StateCopy.sliderContentForShow[2].url
            
            return StateCopy
        }
        case (action.type === RIGHT_SLIDE) : {
            let StateCopy = {...state}
            StateCopy.slidePosition = 'right'
            StateCopy.sliderBgImg = StateCopy.sliderContentForShow[0].url

            return StateCopy
        }
        case (action.type === INITIAL_SLIDE_LEFT) : {     
            let StateCopy = {...state}
            StateCopy.slidePosition = 'center'
            StateCopy.sliderContent = [...state.sliderContent]
            let x = StateCopy.sliderContent.shift()
            StateCopy.sliderContent.push(x)
            StateCopy.sliderContentForShow = StateCopy.sliderContent.slice(0, 3)
            StateCopy.sliderText = StateCopy.sliderContentForShow[1].text
            return StateCopy
        }
        case (action.type === INITIAL_SLIDE_RIGHT) : {     
            let StateCopy = {...state}
            StateCopy.slidePosition = 'center'
            let x = StateCopy.sliderContent.pop()
            StateCopy.sliderContent = [x, ...StateCopy.sliderContent]
            StateCopy.sliderContentForShow = StateCopy.sliderContent.slice(0, 3)
            StateCopy.sliderText = StateCopy.sliderContentForShow[1].text
            return StateCopy
        }

        default:
            return {...state}
    }
}


export default ButtonsReducer