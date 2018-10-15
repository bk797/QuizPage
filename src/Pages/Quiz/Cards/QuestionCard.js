import React from 'react';
import Choice from '../Choices/Choice';
// import NoneOfAbove from '../Choices/NoneOfAbove';
import CustomInput from '../Choices/CustomInput';
import './QuestionCard.css';

const QuestionCard = ({question,choices,answer, onAnswer}) => {

	const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const choiceCards = choices.map((choice,index) => <Choice className="pa3" key={index} label={labels[index]} val={choice} onChoose={onAnswer}/>);
	return(
		<div className="flex flex-column justify-around h-inherit">
			<h1 className="question cursor-default moon-gray">{question}</h1>
			<div className="flex flex-wrap justify-center moon-gray">	
				{choiceCards}
				<CustomInput className="fl w-100" onChoose={onAnswer}/>
			</div>
		</div>
	);
}

export default QuestionCard;