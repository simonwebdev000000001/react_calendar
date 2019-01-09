import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './index.scss';
import actionTypes from '../../../../redux/actions/actionTypes';

class CalendatEventsItem extends PureComponent {


  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  onRemove = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.removeItem(this.props.item);
  };
  onEdit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.editItem(this.props.item);
  };

  render() {
    return (
      <div className={styles.item}>
        <span>{this.props.item.event_name}({this.props.item.event_theme.name})</span>
        <div>
          <Button onClick={this.onRemove}>Delete</Button>
          <Button onClick={this.onEdit}>Edit</Button>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    editItem: (data) => (dispatch) => {
      dispatch({
        type: actionTypes.CALENDAR_VIEW,
        payload: {
          action: {
            type: 2,
            data,
          },
        },
      });
    },
    removeItem: (data) => (dispatch) => {
      dispatch({
        type: actionTypes.CALENDAR_VIEW,
        payload: {
          action: {
            type: 3,
            data,
          },
        },
      });
    },
  }, dispatch)
);


export default connect(null, mapDispatchToProps)(CalendatEventsItem);
