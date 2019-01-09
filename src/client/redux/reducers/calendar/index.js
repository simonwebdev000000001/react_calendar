import actionTypes from '../../actions/actionTypes'


const initialState = {
    events: [],
    view: 'month',
    day: new Date(),
}

const calendar = (state = {...initialState}, action) => {
    switch (action.type) {
        case actionTypes.CALENDAR_VIEW: {
            return {
                ...state,
                ...action.payload ,
            }
        }

        default:
            return state;
    }
}

export default calendar