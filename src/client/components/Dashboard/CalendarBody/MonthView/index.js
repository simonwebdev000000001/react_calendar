import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import Utils from '../../../../utils';
import styles from './index.scss';

class MonthView extends PureComponent {


  componentDidMount() {
  }

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
                      <td key={day.date.toUTCString()} className={day.className}>
                        {day.date.toUTCString().split(' ')[1]}
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
  bindActionCreators({}, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(MonthView);
