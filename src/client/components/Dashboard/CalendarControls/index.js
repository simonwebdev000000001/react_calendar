import React, { PureComponent } from 'react';

import styles from './index.scss';
import CalendarInfo from './CalendarInfo';
import CalendarPeriod from './CalendarPeriod';
import CalendarView from './CalendarView';


class CalendarControls extends PureComponent {

  render() {

    return (
      <div className={styles['top-settings']}>
        <CalendarPeriod/>
        <CalendarInfo/>
        <CalendarView/>
      </div>
    );
  }
}


export default CalendarControls;
