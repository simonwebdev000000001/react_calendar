import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import styles from './index.scss';
import CalendarInfo from './CalendarInfo';
import CalendarPeriod from './CalendarPeriod';
import {
  ButtonToolbar, Button,
} from 'react-bootstrap';


class CalendarControls extends PureComponent {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div className={styles['top-settings']}>
        <CalendarPeriod/>
        <CalendarInfo/>

        <ButtonToolbar>
          <Button>Month</Button>
          <Button>Week</Button>
          <Button>Day</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({}, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(CalendarControls);
