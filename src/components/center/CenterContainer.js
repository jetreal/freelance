
import { connect } from 'react-redux';
import Center from './Center';
import { changePointsPlace,
         changeTV,
         changePointsPlaceDelay,
         leftSlide,
         rightSlide } from '../../redux/Actions';


let mapStateToProps = (state) => {
    return {
        buttons: state.ButtonsReducer
        // texts: state.texts
    } 
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         // handleClick: (id) => {
//         //     dispatch(button1ClickAC(id))
//         // }
//     }
// }


const CenterContainer = connect(mapStateToProps, 
    {changePointsPlace,
     changeTV,
     changePointsPlaceDelay,
     leftSlide,
     rightSlide
})(Center)

export default CenterContainer