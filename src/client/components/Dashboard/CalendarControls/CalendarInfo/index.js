import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Utils from '../../../../utils';


class CalendarInfo extends PureComponent {


  render() {

    const { day, view } = this.props;

    let info = null;
    switch (view) {
      case Utils.CALENDAR_VIEW.MONTH: {
        info = (<span>{day.getFullYear()} {Utils.MONTHES[day.getMonth()]}</span>);
        break;
      }
      case Utils.CALENDAR_VIEW.WEEK: {
        const week = Utils.getWeek(day);
        info = (<span>{week.weekStart.toDateString()} - {week.weekEnd.toDateString()}</span>);
        break;
      }
      case Utils.CALENDAR_VIEW.DAY: {
        info = (<span>{day.toDateString()}</span>);
        break;
      }
    }
    return info;
  }
}

const mapStateToProps = (state) => ({
  day: state.calendar.day,
  view: state.calendar.view,
});
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({}, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(CalendarInfo);
