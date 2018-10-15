import React, {Component} from 'react';
import QuizDisplay from './QuizDisplay';


const state = {
	index:0,
	numRight:0
};

class Quiz extends Component {

	constructor(props){
		super(props);
		this.state = state;
	}

	getQuestion = () => {
		const {index} = this.state;
		const {quizQuestions} = this.props;
		console.log('getQuestion',index);
		return quizQuestions[index];
	}

	nextQuestion = (correct) => {
		let {index,numRight} = this.state;
		const {quizQuestions, onDone} = this.props;
		if(correct){
			numRight++;
		}
		if(index+1 === quizQuestions.length){
			onDone({numRight:numRight,total:quizQuestions.length});
		} else{
			index++;
			this.setState({index:index,numRight:numRight});
		}
	}


	render() {
		const quizQuestion = this.getQuestion();
		const {question,choices,answer} = quizQuestion;
		return (
			<div className="o-80 h-100 ">
				<QuizDisplay question={question} choices={choices} answer={answer} onAnswer={this.nextQuestion}/>
			</div>
		)
	}

}

export default Quiz;