import { RIGHT_BUTTON_CLICK } from "./Constants";


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
headerText: [ 'создание НЕ шаблонных сайтов', 'Sites and Landing pages creating']
  

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
                console.log(copyState.activeButtonNum)
                copyState.activeButtonNum = action.id
                return copyState
            }
            return {...state}
        }
        default:
            return {...state}
    }
}


export default ButtonsReducer