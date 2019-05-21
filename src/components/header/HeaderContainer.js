
import { connect } from 'react-redux';
import Header from './Header';
import { changeLang } from '../../redux/Actions';


let mapStateToProps = (state) => {
    return {
        // buttons: state.ButtonsReducer,
        langBtnNames: state.ButtonsReducer.langBtnNames,
        phoneNum: state.ButtonsReducer.phoneNum,
        headerText: state.ButtonsReducer.headerText,
        isLang: state.ButtonsReducer.isLang
    } 
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         changeLang: changeLang
//     }
// }


const HeaderContainer = connect(mapStateToProps, {changeLang})(Header)

export default HeaderContainer