import React, {Component} from 'react';
import {connect} from 'react-redux';
import ActionComponents from './HeaderComponents/ActionComponents';
import ChooseViewScreenButtons from './HeaderComponents/ChooseViewScreenButtons';
import SearchBarComponent from './HeaderComponents/SearchBarComponent'

class HeaderComponent extends Component {
    constructor(props) {
		super(props);
		this.state = {activeView: "Month", addEventActive: false}
    }


    render () {
        let {addEventActive} = this.props

        return(
        <div className="header-container">
            <ActionComponents addEventActive={addEventActive}/>
            <ChooseViewScreenButtons />
            <SearchBarComponent />
        </div>    
    )}
}

let mapStateToProps = (state) => {
    return {addEventActive: state.addEventActive, activeView: state.activeView}
}

export default connect(mapStateToProps)(HeaderComponent);