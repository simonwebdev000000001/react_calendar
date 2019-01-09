import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import EventList from '../../CalendatEvents/EventList';
import Utils from '../../../../utils';
import styles from './index.scss';
import actionTypes from '../../../../redux/actions/actionTypes';

class MonthView extends PureComponent {


  /**
   * return list of days in weeks
   * */
  _weeks() {
    const { day } = this.props;
    const weeks = [];

    let endOfMonth = Utils.endOfMonth(day);
    let startOfMonth = Utils.beginningOfMonth(day);
    let fistDayOfMonth = (new Date(day.getFullYear(), day.getMonth(), 1).getDay());

    while (fistDayOfMonth-- > 0) {
      startOfMonth.setDate(startOfMonth.getDate() - 1);
    }

    for (let i = 0; i < 5 || startOfMonth.getTime() < endOfMonth.getTime(); i++) {
      const week = [];
      weeks.push(week);
      for (let j = 0; j < Utils.WEEK_DAYS.length; j++) {

        const _day = new Date(startOfMonth.getTime());
        const className = _day.getMonth() === day.getMonth() ? '' : 'not-current-period';
        _day.setDate(_day.getDate() + 1);
        startOfMonth = _day;
        week.push(
          {
            date: _day,
            className,
          },
        );
      }
    }
    return weeks;
  }


  render() {
    const weeks = this._weeks();
    const { events } = this.props;

    return (
      <table className={`table ${styles.table}`}>
        <thead>
        <tr>
          {
            Utils.WEEK_DAYS.map((day) => {
              return (<th key={day} style={{ textAlign: 'center' }}>{day}</th>);
            })
          }
        </tr>
        </thead>
        <tbody>
        {
          weeks.map((week, index) => {
            return (
              <tr key={`week_${index}`}>
                {
                  week.map((day) => {
                    return (
                      <td
                        key={day.date.toUTCString()}
                        className={day.className}
                        onClick={() => this.props.addEvent(day.date)}
                      >
                        {day.date.toUTCString().split(' ')[1]}
                        <EventList day={day} />
                      </td>
                    );
                  })
                }
              </tr>
            );
          })
        }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.calendar.events,
  day: state.calendar.day,
});
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    addEvent: (day) => (dispatch) => {
      dispatch({
        type: actionTypes.CALENDAR_VIEW,
        payload: {
          action: {
            type: 1,
            data: { day,hour:'12:00 AM' },
          },
        },
      });
    },
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(MonthView);
