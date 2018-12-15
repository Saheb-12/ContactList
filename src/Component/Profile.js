import React from 'react';
import Card from './Card';
import User from './User';

const Profile = ({singleRobot, onRouteChange}) => {
	return(
		<div className='flex'>
			<div className = 'w-third pa3 mr2'>
				<Card id={singleRobot[0].id} name={singleRobot[0].name} email={singleRobot[0].email} onRouteChange={onRouteChange}/>
			</div>
			<div className = 'w-two-thirds pa3 mr2'>
				<User singleRobot={singleRobot[0]}/>
			</div>
		</div>
	);
}

export default Profile;