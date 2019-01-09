import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import {
  ButtonToolbar, Button,
} from 'react-bootstrap';
import actionTypes from '../../../../redux/actions/actionTypes';
import Utils from '../../../../utils';


class CalendarView extends PureComponent {


  updateView = (e) => {
    this.props.updateView(parseInt(e.target.dataset.view));
  }

  render() {
    return (
      <ButtonToolbar>
        <Button onClick={this.updateView} data-view={Utils.CALENDAR_VIEW.MONTH}>Month</Button>
        <Button onClick={this.updateView} data-view={Utils.CALENDAR_VIEW.WEEK}>Week</Button>
        <Button onClick={this.updateView} data-view={Utils.CALENDAR_VIEW.DAY}>Day</Button>
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
    updateView: (view) => (dispatch) => {
      dispatch({
        type: actionTypes.CALENDAR_VIEW,
        payload: { view },
      });
    },
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(CalendarView);
