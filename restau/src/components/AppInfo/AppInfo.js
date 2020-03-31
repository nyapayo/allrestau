import React, { useEffect, useState } from 'react';
import './AppInfo.css';
import { connect } from 'react-redux';
import { getNumberRestaurant } from '../../actions';

const AppInfo = props => {	
	const [nbRestau, setNbrestau] = useState(0);
	useEffect(() => {
		
		// props.getNumberRestaurant();
		/*fetch('/getnumberrestaurant').then(httpResp => {
			return httpResp.json();
		}).then(data => {
			setNbrestau(data.nb);
		})*/
		return () => {

		}
	});
	return (
		<div>
			<h2 className='w3-text-blue' id='app-question'>C'est quoi Allrestau?</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
			<div className='w3-border-top'></div>
			<div className='w3-panel w3-black w3-padding-16 w3-opacity-min' style={{textAlign: 'left'}}>
				<h2>Allrestau est utlisée par plus de <span className='w3-text-blue'>{props.nbRestau}</span> restaurants. <br />Merci!</h2>
			</div>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		nbRestau: state.nbRestau
	}
}

const mapDispatchToProps = {
	getNumberRestaurant
}

export default connect(mapStateToProps, mapDispatchToProps)(AppInfo);