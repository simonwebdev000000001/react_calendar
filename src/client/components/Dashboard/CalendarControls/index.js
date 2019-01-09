import React, { PureComponent } from 'react';

import styles from './index.scss';
import CalendarInfo from './CalendarInfo';
import CalendarPeriod from './CalendarPeriod';
import CalendarView from './CalendarView';
import CalendarThemeFilter from './CalendarThemeFilter';


class CalendarControls extends PureComponent {

  render() {

    return (
      <div className={styles['top-settings']}>
        <CalendarPeriod/>
        <CalendarInfo/>
        <div className={styles['right-controls']}>
          <CalendarView/>
          <CalendarThemeFilter/>
        </div>
      </div>
    );
  }
}


export default CalendarControls;
