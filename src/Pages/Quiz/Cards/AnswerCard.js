import React from 'react';
import {button} from '../../../Style/styles'

const AnswerCard = ({correct,guess,answer, onDone}) => {

	return(
		<div className="cursor-default moon-gray h-100 flex flex-column justify-between items-center">
			<h1 className="f1">{correct ? "CORRECT!" : "WRONG!"}</h1>
			<div>
				<h1 className = "f2">{`The answer was ${answer}`}</h1>
				<h1 className="f3">{`You chose ${guess}`}</h1>
			</div>
			<button 
			 className="h3 w-50 mb3 moon-gray bg-dark-gray ba grow br-pill f3"
			 onClick={onDone}>Next Question </button>
		</div>
	);
}

export default AnswerCard;