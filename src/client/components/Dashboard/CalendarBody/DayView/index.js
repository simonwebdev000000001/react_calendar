import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import Utils from '../../../../utils';
import styles from './index.scss';
import EventList from '../../CalendatEvents/EventList';
import actionTypes from '../../../../redux/actions/actionTypes';

class DayView extends PureComponent {


  render() {
    const { day } = this.props;
    const dayStr = day.toDateString();
    const hours = Utils.getDayHours();

    return (
      <table className={`table ${styles.table}`}>
        <thead>
        <tr>
          <th></th>
          <th key={day} style={{ textAlign: 'center' }}>{dayStr}</th>
        </tr>
        </thead>
        <tbody>

        {
          hours.map(({ hour }) => {
            return (
              <tr key={hour}>
                <td className={'ignore-events'}>{hour}</td>
                <td onClick={() => this.props.addEvent(day, hour)}>
                  <EventList day={day} hour={hour} />
                </td>
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


export default connect(mapStateToProps, mapDispatchToProps)(DayView);
