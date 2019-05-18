import { RIGHT_BUTTON_CLICK } from "./Constants";


let initialState = [
    { id: 1, name: 'button 1', isActiveColor: true},
    { id: 2, name: 'button 2', isActiveColor: false},
    { id: 3, name: 'button 3', isActiveColor: false},
    { id: 4, name: 'button 4', isActiveColor: false},
    { id: 5, name: 'button 5', isActiveColor: false},
    { id: 6, name: 'button 6', isActiveColor: false}
]

const ButtonsReducer = (state = initialState, action) => {
    switch (true) {
        case (action.type === RIGHT_BUTTON_CLICK): {
            console.log(action.id)
            if (state[action.id - 1].isActiveColor) {
                return [...state]
            } else {

            }
            return [...state]
        }
        default:
            return [...state]
    }
}


export default ButtonsReducer