import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import MonthView from './MonthView';
import WeekView from './WeekView';
import DayView from './DayView';
import Utils from '../../../utils';

class CalendarBody extends PureComponent {


  render() {
    const { view } = this.props;
    let viewComponent = null;
    switch (view) {
      case Utils.CALENDAR_VIEW.MONTH: {
        viewComponent = (<MonthView/>);
        break;
      }
      case Utils.CALENDAR_VIEW.WEEK: {
        viewComponent = (<WeekView/>);
        break;
      }
      case Utils.CALENDAR_VIEW.DAY: {
        viewComponent = (<DayView/>);
        break;
      }
    }
    return (
      <div>
        {viewComponent}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  view: state.calendar.view,
});


export default connect(mapStateToProps)(CalendarBody);
