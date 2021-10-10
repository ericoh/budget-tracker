import React,{useContext} from 'react';
import{AppContext} from './AppContext';
const Budget = () =>
{
	const { budget }= useContext(AppContext);

	return(
	<div className="alert alert-secondary">
		<span>Budget: Kshs{budget}</span>
	</div>	
	);
}
export default Budget;