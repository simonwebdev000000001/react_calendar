import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import {
  Button, Modal,
} from 'react-bootstrap';
import actionTypes from '../../../../redux/actions/actionTypes';


class CalendarThemeFilter extends PureComponent {


  constructor(props) {
    super(props);
    this.state = {
      filter: false,
      themes: props.themes.map((el) => {
        return { ...el };
      }),
    };
  }

  filter = () => {
    this.props.updateThemes(this.state.themes.map((el) => {
      return { ...el };
    }));
    this.toggleModal();
  };
  toggleModal = () => {
    this.setState({ filter: !this.state.filter });
  };

  render() {
    return (
      <div>
        <Button onClick={this.toggleModal}>Themes</Button>

        {
          this.state.filter && (
            <Modal show={true} onHide={this.toggleModal}>
              <Modal.Header>
                <Modal.Title>Show events by theme</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                {

                  this.state.themes.map((el) => {
                    let checbox = {
                      type: 'checkbox',
                      onChange: () => {
                        el.available = !el.available;
                        this.setState({
                          themes: [...this.state.themes],
                        });
                      },
                    };
                    if (el.available) checbox.checked = true;
                    return (<p key={el.id}><label htmlFor={`check_${el.id}`}>{el.name}</label> <input id={`check_${el.id}`}{...checbox}/></p>);
                  })
                }
              </Modal.Body>

              <Modal.Footer>
                <Button onClick={this.toggleModal}>Cancel</Button>
                <Button bsStyle="primary" onClick={this.filter}>Save</Button>
              </Modal.Footer>
            </Modal>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  themes: state.calendar.themes,
});
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    updateThemes: (themes) => (dispatch) => {
      dispatch({
        type: actionTypes.CALENDAR_VIEW,
        payload: { themes },
      });
    },
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(CalendarThemeFilter);
