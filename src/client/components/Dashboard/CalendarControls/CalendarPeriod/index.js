import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import {
  ButtonToolbar, Button,
} from 'react-bootstrap';
import actionTypes from '../../../../redux/actions/actionTypes';
import Utils from '../../../../utils';


class CalendarPeriod extends PureComponent {

  constructor(props) {
    super(props);
  }

  toDay = () => {
    this.props.updatePeriod(new Date());
  };
  prevPeriod = () => {
    this.updatePeriod(-1);
  };
  nextPeriod = () => {
    this.updatePeriod(1);
  };

  updatePeriod(dir = 1) {
    const { day, view } = this.props;

    switch (view) {
      case Utils.CALENDAR_VIEW.MONTH: {
        let dayCopy = new Date(day.getTime());
        dayCopy.setMonth(dayCopy.getMonth() + 1 * dir);
        return this.props.updatePeriod(dayCopy);
      }
      case Utils.CALENDAR_VIEW.WEEK: {
        let dayCopy = new Date(day.getTime());
        dayCopy.setDate(dayCopy.getDate() + Utils.WEEK_DAYS.length * dir);
        return this.props.updatePeriod(dayCopy);
      }
      case Utils.CALENDAR_VIEW.DAY: {
        let dayCopy = new Date(day.getTime());
        dayCopy.setDate(dayCopy.getDate() + dir);
        return this.props.updatePeriod(dayCopy);
      }
    }
  }

  render() {
    return (
      <ButtonToolbar>
        <Button onClick={this.toDay}>Today</Button>
        <Button onClick={this.prevPeriod}>Prev</Button>
        <Button onClick={this.nextPeriod}>Next</Button>
      </ButtonToolbar>
    );
  }
}

const mapStateToProps = (state) => ({
  day: state.calendar.day,
  view: state.calendar.view,
});
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    updatePeriod: (day) => (dispatch) => {
      dispatch({
        type: actionTypes.CALENDAR_VIEW,
        payload: { day },
      });
    },
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(CalendarPeriod);
