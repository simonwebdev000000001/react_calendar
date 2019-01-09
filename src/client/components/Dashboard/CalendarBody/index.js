import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import MonthView from './MonthView';
import {
  ButtonToolbar, Button,
} from 'react-bootstrap';


class CalendarBody extends PureComponent {


  componentDidMount() {
  }

  render() {
    const { view } = this.props;
    let viewComponent = null;
    switch (view) {
      case 'month': {
        viewComponent = (<MonthView/>);
        break;
      }
    }
    return (
      <div>
        {viewComponent}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  view: state.calendar.view,
});
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({}, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(CalendarBody);
