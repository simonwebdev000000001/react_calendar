import React, { Component } from 'react';
import './app.css';
import './app.scss';


import store from './redux/store'
import { Provider } from 'react-redux'

import AppRoutes from './app.routes'

export default class App extends Component {
 

  render() { 
    return (
      <div>
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </div>
    );
  }
}
