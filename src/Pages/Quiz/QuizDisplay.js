import React, {Component} from 'react';
import QuestionCard from './Cards/QuestionCard';
import AnswerCard from './Cards/AnswerCard';

const state = {state:'question'}

class QuizDisplay extends Component {

	constructor(props){
		super(props);
		this.state = state;
	}

	checkAnswer = (ans) => {
		const {answer} = this.props;
		const newState = {state:'answer',guess:ans}
		ans === answer ? newState.correct = true : newState.correct = false;
		this.setState(newState);
	}

	nextQuestion = () => {
		const {correct} = this.state;
		const {onAnswer} = this.props
		onAnswer(correct);
		this.setState({state:"question"});
	}

	render() {
		const {state} = this.state;
		let card;
		switch(state){
			case "question":
				const {question,choices} = this.props;
				card = <QuestionCard question={question} choices={choices} onAnswer={this.checkAnswer} />
				break;
			case "answer":
				const {answer} = this.props;
				const {correct,guess} = this.state;
				card = <AnswerCard correct={correct} guess={guess} answer={answer} onDone={this.nextQuestion} />
				break;
			default:
				return <p>I shouldn't be here </p>
		}
		return(
			<div className="h-inherit">
				{card}
			</div>
		)
	}


}

export default QuizDisplay;