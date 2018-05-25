import React, {Component} from 'react';
import ActionComponents from './HeaderComponents/ActionComponents';
import ChooseViewScreenButtons from './HeaderComponents/ChooseViewScreenButtons';
import SearchBarComponent from './HeaderComponents/SearchBarComponent'

class HeaderComponent extends Component {
    constructor(props) {
		super(props);
		this.state = {activeView: "Month"};
    }

    render () {
        return(
        <div className="header-container">
            <ActionComponents />
            <ChooseViewScreenButtons />
            <SearchBarComponent />
        </div>    
    )}
}

export default HeaderComponent;