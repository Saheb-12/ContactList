import { 
	CHANGE_SEARCH_FIELD,
	REPONSE_IS_PENDING,
	REPONSE_IS_SUCCESS,
	REPONSE_IS_FAILED,
	ROUTE_CHANGE
	 } from './constants'

export const setSearchField = (search) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: search
});

export const setRobots = (dispatch) => {
	dispatch({ type: REPONSE_IS_PENDING });
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(data => dispatch({ type : REPONSE_IS_SUCCESS, payload : data }))
	.catch(err => dispatch({ type : REPONSE_IS_FAILED, payload : err }))
}

export const routeChange = (route, id) => ({
	type: ROUTE_CHANGE,
	payload: {
		route: route,
		id: id
	}
});