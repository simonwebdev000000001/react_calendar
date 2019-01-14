import actionTypes from '../actionTypes';
const sourceKey = '_events';

export const loadAllEvents = () => (dispatch) => {
  let data = localStorage.getItem(sourceKey);
  if (data) {
    data = JSON.parse(data);
  } else {
    data = [];
  }
  dispatch({
    type: actionTypes.CALENDAR_VIEW,
    payload: {
      events: data.map((el) => {
        el.day = new Date(el._dayTime);
        return el;
      }),
    },
  });
};

export const addEvent = (event) => (dispatch) => {
  event.id = Date.now();
  event._dayTime = event.day.getTime();
  let data = localStorage.getItem(sourceKey);
  if (data) {
    data = JSON.parse(data);
  } else {
    data = [];
  }
  data.push(event);
  localStorage.setItem(sourceKey, JSON.stringify(data));

  dispatch({
    type: actionTypes.CALENDAR_ADD_EVENT,
    payload: event,
  });
};

export const editEvent = (event) => (dispatch) => {
  let data = localStorage.getItem(sourceKey);
  if (data) {
    data = JSON.parse(data);
  }
  data.forEach((_event) => {
    if (_event.id === event.id) {
      Object.assign(_event, event);
      _event._dayTime = _event.day.getTime();
    }
  });
  localStorage.setItem(sourceKey, JSON.stringify(data));

  dispatch({
    type: actionTypes.CALENDAR_EDIT_EVENT,
    payload: event,
  });
};
export const removeEvent = (event) => (dispatch) => {
  let data = localStorage.getItem(sourceKey);
  if (data) {
    data = JSON.parse(data);
  }
  data = data.filter(({ id }) => id !== event.id);
  localStorage.setItem(sourceKey, JSON.stringify(data));

  dispatch({
    type: actionTypes.CALENDAR_DELETE_EVENT,
    payload: event,
  });
};

