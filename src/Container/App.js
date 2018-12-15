import React, {Component} from 'react';
import CardList from '../Component/CardList';
import SearchBox from '../Component/SearchBox';
import Scroll from '../Component/Scroll';
import Profile from '../Component/Profile';
import { connect } from 'react-redux';
import { setSearchField, setRobots, routeChange } from '../action'
import './App.css';


const mapStateToProps = (state) => {
	return ({
		searchField : state.searchRobots.searchField,
		robots : state.requestRobots.robots,
		isPending : state.requestRobots.isPending,
		error : state.requestRobots.error,
		route: state.changeRoute.route,
		id: state.changeRoute.id
	})
}

const mapDispatchToProps = (dispatch) => {
	return ({
		onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
		getRobots : () => setRobots(dispatch),
		onRouteChange : (route, id) => dispatch(routeChange(route, id))
	})
}

class App extends Component {
	componentDidMount(){
		this.props.getRobots();
	}
	
	render(){
		const { searchField, onSearchChange, robots, onRouteChange, route, id } = this.props;
		const filteredRobot = robots.filter(robots => {
			return robots.name.toLowerCase().includes(searchField.toLowerCase())
		});
		const singleRobot = robots.filter(robots => {
			return (Number(robots.id) === Number(id))
		});
		return (!robots.length)? 
			<h1>Loading</h1> :
			(	
				<div className='tc'>
					{
						(route === 'singleUser') &&
							<nav>
								<div className='flex justify-end'>
									<p className='ma1' onClick= {() => onRouteChange('allContacts', "")}>Back</p>
								</div>
							</nav>
						
					}
					<h1 className='f1'>RoboFriends</h1>
					{
						(route === 'allContacts') &&
						<SearchBox searchChange={onSearchChange} />
					}
					<Scroll>
					{
						(route === 'allContacts')
						?<CardList robots = {filteredRobot} onRouteChange = {onRouteChange}/>
						:((route === 'singleUser')
							?<Profile singleRobot = {singleRobot}  onRouteChange = {onRouteChange}/>
							:<div><h1>LOADING...</h1></div>)
					}
					</Scroll>
				</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);