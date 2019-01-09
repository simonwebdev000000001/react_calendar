import React, { Component  } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom'

import { Route } from 'react-router-dom'

import Dashboard from './components/Dashboard'


class AppRoutes extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Dashboard} />
                </Switch>
            </BrowserRouter>
        );
    }
}


export default AppRoutes
