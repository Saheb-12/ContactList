import { 
	CHANGE_SEARCH_FIELD,
	REPONSE_IS_PENDING,
	REPONSE_IS_SUCCESS,
	REPONSE_IS_FAILED,
	ROUTE_CHANGE
	 } from './constants'

const initialSearchState = {
	searchField : ''
}
export const searchRobots = ( state=initialSearchState, action= {} ) => {
	switch (action.type){
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {searchField: action.payload} );
		default :
			return state;
	}
}

const initialRobotState = {
	robots: [],
	isPending: false,
	error: ''
}

export const requestRobots = ( state = initialRobotState, action = {} ) => {
	switch(action.type){
		case REPONSE_IS_PENDING: 
			return Object.assign({}, state, {isPending: true});
		case REPONSE_IS_SUCCESS:
			return Object.assign({}, state, {robots: action.payload, isPending: false});
		case REPONSE_IS_FAILED:
			return Object.assign({}, state, {error: action.payload, isPending: false})
		default:
			return state;
	}
}

const initialRoute = {
	route: 'allContacts',
	id: ''
}

export const changeRoute = (state=initialRoute, action={}) => {
	switch(action.type){
		case ROUTE_CHANGE:
			return Object.assign({}, state, { route: action.payload.route, id: action.payload.id });
		default:
			return state;
	}
}