import { FETCH_CHEESES_REQUEST, FETCH_CHEESES_SUCCESS, FETCH_CHEESES_ERROR } from '../actions/cheese';

const initialState = {
  cheeses: [],
  loading: false,
  error: null
}

export const reducer = (state=initialState, action) => {
  if (action.type === FETCH_CHEESES_REQUEST) {
		Object.assign({}, state, {
			loading: true,
		})
	}

	if (action.type === FETCH_CHEESES_SUCCESS) {
		Object.assign({}, state, {
			cheeses: action.cheeses,
			loading: false,
			error: null
		})
	}

	if (action.type === FETCH_CHEESES_ERROR) {
		Object.assign({}, state, {
			loading: false,
			error: action.error
		})
	}
}