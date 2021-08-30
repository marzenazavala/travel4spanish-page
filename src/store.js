import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import appReducer from './rootReducer'

const dev = !process.env.REACT_APP_ENV || process.env.REACT_REACT_APP_ENV === 'development'

const configureStore = (initialState, firebase) => {
  const middlewares = [thunk.withExtraArgument(firebase)]

	const composeEnhancers = 
		dev && typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: compose;

		const enhancer = composeEnhancers(applyMiddleware(...middlewares));
		return createStore(appReducer, initialState, enhancer);
}

export default configureStore