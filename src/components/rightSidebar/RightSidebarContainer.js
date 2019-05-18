import RightSidebar from './RightSidebar'
import { connect } from 'react-redux';
import { button1ClickAC } from '../../redux/Actions';


let mapStateToProps = (state) => {
    console.log(state)
    return {
        buttons: state.ButtonsReducer
    } 
}

let mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (id) => {
            dispatch(button1ClickAC(id))
        }

    }
}


const RightSidebarContainer = connect(mapStateToProps, mapDispatchToProps)(RightSidebar)

export default RightSidebarContainer