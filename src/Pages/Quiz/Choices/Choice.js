import React from 'react';
import './choice.css';
import {answerBox} from '../../../Style/styles';


const Choice = ({label,val,onChoose}) => {

	const chosen = () => {
		onChoose(val);
	}

	return(
		<div className={`choice ${answerBox}`} onClick={chosen} value={val}>
			<h2 value={val}>{`${label}: ${val}`}</h2>
		</div>
	);
}


export default Choice