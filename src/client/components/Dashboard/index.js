import React, { PureComponent } from 'react';


import CalendarControls from './CalendarControls';
import CalendarBody from './CalendarBody';


class Dashboard extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {


    return (
      <div className="container">
        <CalendarControls/>
        <CalendarBody/>
      </div>
    );
  }
}


export default (Dashboard);
