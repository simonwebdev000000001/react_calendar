
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk'
import rootReducer from './rootReducer'

const initialState = {}

// middlewares
const middlewares = [reduxThunk]

const store = createStore(
	rootReducer,
	initialState,

	compose(
		applyMiddleware(...middlewares), 
	)
);

export default store