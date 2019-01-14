import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import CalendarControls from './CalendarControls';
import CalendarBody from './CalendarBody';
import CalendatEvents from './CalendatEvents';
import { loadAllEvents } from '../../redux/actions/calendar';


class Dashboard extends PureComponent {

  componentDidMount() {
    this.props.loadAllEvents();
  }

  render() {
    return (
      <div className="container">
        <CalendarControls/>
        <CalendarBody/>
        <CalendatEvents/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    loadAllEvents,
  }, dispatch)
);


export default connect(null, mapDispatchToProps)(Dashboard);
