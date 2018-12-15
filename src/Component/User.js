import React from 'react';

const User = ({singleRobot}) => {
	return(
		<div>
			<div className='cf'>
				<div className='fl ph3 mh2 b'>
					<p>Username : </p>
				</div>
				<div className='fl'>
					<p className='tl'>{singleRobot.username}</p>
				</div>
			</div>
			<div className='cf'>
				<div className='fl ph3 mh2 b'>
					<p>E-Mail : </p>
				</div>
				<div className='fl'>
					<p className='tl'>{singleRobot.email}</p>
				</div>
			</div>
			<div className='cf'>
				<div className='fl ph3 mh2 b'>
					<p>Phone : </p>
				</div>
				<div className='fl'>
					<p className='tl'>{singleRobot.phone}</p>
				</div>
			</div>
			<div className='cf'>
				<div className='fl ph3 mh2 b'>
					<p>Website : </p>
				</div>
				<div className='fl'>
					<p className='tl'>{singleRobot.website}</p>
				</div>
			</div>
			<div className='cf'>
				<div className='fl ph3 mh2 b'>
					<p>Address : </p>
				</div>
				<div className='fl'>
					<p className='tl'>{ singleRobot.address.suite }</p>
					<p className='tl'>{ singleRobot.address.street }</p>
					<p className='tl'>{ singleRobot.address.city }</p>
					<p className='tl'>zip : { singleRobot.address.zipcode }</p>
				</div>
			</div>
			<div className='cf'>
				<div className='fl ph3 mh2 b'>
					<p>Company : </p>
				</div>
				<div className='fl'>
					<p className='tl'>{ singleRobot.company.name }</p>
					<p className='tl'>{ singleRobot.company.catchPhrase }</p>
					<p className='tl'>{ singleRobot.company.bs }</p>
				</div>
			</div>
		</div>

	);
}

export default User;