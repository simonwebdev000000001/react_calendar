import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Modal, Button, FormGroup, ControlLabel, FormControl, DropdownButton, MenuItem,
} from 'react-bootstrap';

import styles from './index.scss';
import actionTypes from '../../../redux/actions/actionTypes';
import { addEvent, editEvent, removeEvent } from '../../../redux/actions/calendar';

class CalendatEvents extends PureComponent {


  constructor(props) {
    super(props);
    this.state = {
      event_name: '',
      event_theme: props.themes[0],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.action && (!this.props.action || nextProps.action.data.id !== this.props.action.data.id)) {
      this.setState({
        ...nextProps.action.data,
      });
    }
  }

  create = () => {
    this.props.addEvent({
      ...this.state,
      ...this.props.action.data,
    });
    this.cancel();
  };

  edit = () => {
    this.props.editEvent({
      ...this.props.action.data,
      ...this.state,

    });
    this.cancel();
  };

  remove = () => {
    this.props.removeEvent(this.props.action.data);
    this.cancel();
  };

  cancel = () => {
    this.props.close();
    this.setState({
      event_name: '',
      event_theme: this.props.themes[0],
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  modalContent() {
    const { action } = this.props;
    if (!action) return null;
    switch (action.type) {
      case 1: {//create
        return {
          title: `Create Event(${action.data.day.toDateString()})`,
          titleBtn: 'Create',
          onSuccess: this.create,
          body: (
            <form>
              <FormGroup
                controlId="formBasicText"
              >
                <ControlLabel>Event name</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.event_name}
                  name={'event_name'}
                  placeholder="Enter name"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <div className={styles['form-item']}>
                <ControlLabel>Event theme</ControlLabel>
                <DropdownButton
                  id={'dropdown'}
                  title={this.state.event_theme.name}
                >
                  {
                    this.props.themes.map((theme) => (
                      <MenuItem key={theme.id}
                                onClick={() => this.setState({ event_theme: theme })}>{theme.name}</MenuItem>
                    ))
                  }

                </DropdownButton>
              </div>


            </form>
          ),
        };
      }
      case 2: {//edit
        return {
          title: `Edit Event(${action.data.event_name})`,
          titleBtn: 'Edit',
          onSuccess: this.edit,
          body: (
            <form>
              <FormGroup
                controlId="formBasicText"
              >
                <ControlLabel>Event name</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.event_name}
                  name={'event_name'}
                  placeholder="Enter name"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <div className={styles['form-item']}>
                <ControlLabel>Event theme</ControlLabel>
                <DropdownButton
                  id={'dropdown'}
                  title={this.state.event_theme.name}
                >
                  {
                    this.props.themes.map((theme) => (
                      <MenuItem key={theme.id}
                                onClick={() => this.setState({ event_theme: theme })}>{theme.name}</MenuItem>
                    ))
                  }

                </DropdownButton>
              </div>
            </form>
          ),
        };
      }
      case 3: {//remove
        return {
          title: `Remove Event`,
          titleBtn: 'remove',
          onSuccess: this.remove,
          body: (<div>Are you sure to remove event({action.data.event_name})</div>),
        };
      }
    }
    return null;
  }

  render() {


    let modal = this.modalContent();

    if (!modal) return modal;


    return (
      <Modal show={true} onHide={this.cancel}>
        <Modal.Header>
          <Modal.Title>{modal.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {modal.body}
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.cancel}>Cancel</Button>
          <Button bsStyle="primary" onClick={modal.onSuccess}>{modal.titleBtn}</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  action: state.calendar.action,
  themes: state.calendar.themes,
});
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    close: () => (dispatch) => {
      dispatch({
        type: actionTypes.CALENDAR_VIEW,
        payload: {
          action: null,
        },
      });
    },
    addEvent,
    editEvent,
    removeEvent,
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(CalendatEvents);
