import React, {Component} from 'react';
import CardList from '../Component/CardList';
import SearchBox from '../Component/SearchBox';
import Scroll from '../Component/Scroll'
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			robots : [],
			searchList : ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}))
	}

	onSearchChange = (event) => {
		this.setState({searchList: event.target.value});
	}

	render(){
		const { robots, searchList } = this.state;
		const filteredRobot = robots.filter(robots => {
			return robots.name.toLowerCase().includes(searchList.toLowerCase())
		});
		return (!robots.length)? 
			<h1>Loading</h1> :
			(	
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList robots = {filteredRobot} />
					</Scroll>
				</div>
		);
	}
}

export default App;