import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Utils from '../../../../utils';


class CalendarInfo extends PureComponent {



  render() {

    let info;
    switch (this.props.view) {
      case 'month': {
        info = (<span>{this.props.day.getFullYear()} {Utils.MONTHES[this.props.day.getMonth()]}</span>);
      }
    }
    return info;
  }
}

const mapStateToProps = (state) => ({
  day: state.calendar.day,
  view: state.calendar.view,
});
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({}, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(CalendarInfo);
