
import { connect } from 'react-redux';
import Center from './Center';


let mapStateToProps = (state) => {
    return {
        buttons: state.ButtonsReducer
        // texts: state.texts
    } 
}

let mapDispatchToProps = (dispatch) => {
    return {
        // handleClick: (id) => {
        //     dispatch(button1ClickAC(id))
        // }

    }
}


const CenterContainer = connect(mapStateToProps, mapDispatchToProps)(Center)

export default CenterContainer