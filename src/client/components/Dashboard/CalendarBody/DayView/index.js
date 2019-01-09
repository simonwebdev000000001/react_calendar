import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import Utils from '../../../../utils';
import styles from './index.scss';

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
                <td></td>
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


export default connect(mapStateToProps, mapDispatchToProps)(DayView);
