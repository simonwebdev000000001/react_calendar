import actionTypes from '../actionTypes';


export const loadAllEvents = () => (dispatch) => {
  let data = localStorage.getItem('events');
  if (data) {
    data = JSON.parse(data);
  } else {
    data = [];
  }
  dispatch({
    type: actionTypes.CALENDAR_VIEW,
    payload: {events:data},
  });
};

