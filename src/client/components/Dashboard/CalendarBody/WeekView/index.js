import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import Utils from '../../../../utils';
import styles from './index.scss';
import EventList from '../../CalendatEvents/EventList';
import actionTypes from '../../../../redux/actions/actionTypes';

class WeekView extends PureComponent {


  render() {
    const { day } = this.props;
    const week = Utils.getWeek(day);
    const hours = Utils.getDayHours();

    return (
      <table className={`table ${styles.table}`}>
        <thead>
        <tr>
          <th></th>
          {
            Utils.WEEK_DAYS.map((day) => {
              const dayStr = week.weekStart.toDateString();
              week.weekStart.setDate(week.weekStart.getDate() + 1);
              return (<th key={day} style={{ textAlign: 'center' }}>{dayStr}</th>);
            })
          }
        </tr>
        </thead>
        <tbody>

        {
          hours.map(({ hour }) => {
            return (
              <tr key={hour}>
                <td className={'ignore-events'}>{hour}</td>
                {
                  Utils.WEEK_DAYS.map((day, index) => {
                    let _date = week.days[index];
                    return (
                      <td key={day} onClick={() => this.props.addEvent(_date, hour)}>
                        <EventList day={_date} hour={hour}/>
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
  day: state.calendar.day,
});
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    addEvent: (day,hour) => (dispatch) => {
      dispatch({
        type: actionTypes.CALENDAR_VIEW,
        payload: {
          action: {
            type: 1,
            data: { day,hour },
          },
        },
      });
    },
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(WeekView);
