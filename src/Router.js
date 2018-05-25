import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import HeaderComponent from './Components/HeaderComponent';
import MonthScreen from './Components/MonthScreen';
import DayScreen from './Components/DayScreen';
import YearScreen from './Components/YearScreen';
import InitialScreen from './Components/InitialScreen';

let Router = () => 
    <div className="container">
    <HashRouter>
        <div className="container">
            <HeaderComponent/>
            <div className="differentScreens">
            <Route path="/" exact component={InitialScreen} />
            <Route path = "/month/:targetMonth" component={MonthScreen} />
            <Route path = "/year/:targetYear" component={YearScreen} />
            <Route path = "/day/:targetDay" component={DayScreen} />
            </div>
        </div>
    </HashRouter>
    </div>

export default Router;