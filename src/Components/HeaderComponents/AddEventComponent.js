import React from 'react';
import {connect} from 'react-redux';
import {toggleAddEvent} from '../../actions';

let AddEventComponent = ({dispatch}) => {
    return <button onClick={() => {
        dispatch(toggleAddEvent())}
    }> + </button>
}

// let mapStateToProps = (state) => {
//     return null;
// };  

let mapDispatchToProps = (dispatch, props) => {
    return {dispatch: dispatch}
};

export default connect(null, mapDispatchToProps)(AddEventComponent);