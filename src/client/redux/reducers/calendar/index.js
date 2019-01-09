import actionTypes from '../../actions/actionTypes';


const initialState = {
  events: [],
  view: 1,
  day: new Date(),
  themes: [
    {
      name: 'Birthday',
      id: 1,
    },
    {
      name: 'Meetings',
      id: 2,
    }, {
      name: 'Holidays',
      id: 4,
    },
  ],
  action: null,
};

const calendar = (state = { ...initialState }, action) => {
  switch (action.type) {
    case actionTypes.CALENDAR_VIEW: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case actionTypes.CALENDAR_DELETE_EVENT: {
      return {
        ...state,
        events: state.events.filter(({ id }) => id !== action.payload.id),
      };
    }
    case actionTypes.CALENDAR_EDIT_EVENT: {
      return {
        ...state,
        events: state.events.map((event) => {
          if (event.id === action.payload.id) {
            Object.assign(event, action.payload);
          }
        }),
      };
    }
    case actionTypes.CALENDAR_ADD_EVENT: {
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    }

    default:
      return state;
  }
};

export default calendar;