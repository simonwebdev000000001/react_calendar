import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import Utils from '../../../../utils';
import styles from './index.scss';

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
                  Utils.WEEK_DAYS.map((day) => {
                    return (<td key={day}></td>);
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
  bindActionCreators({}, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(WeekView);
