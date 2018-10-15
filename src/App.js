//Packages
import React , {Component} from 'react';
import Particles from 'react-particles-js';

//UserComponents
import Quiz from './Pages/Quiz/Quiz';
import Start from './Pages/Start/Start';
import Result from './Pages/Result/Result';
import Load from './Pages/Load/Load';

//Styles
import './App.css';

const State = {
	Start: "START",
	Load: "LOAD",
	Quiz: "QUIZ",
	Result: "RESULT"
}

const defaultState = {
	state:State.Start,
	data:{},
	questions:[]
};


const particleSettings = {
	particles:{
		number:{
			value:20,
			density:{
				enable:true,
				value_area:500
			}
		},
		size:{

		},
		line_linked:{
			enable:false,
			distance:10,
			width:3
		}
	},
	interactivity: {
        detect_on:"window", 
        events: {
           onhover: {
                enable: true,
                mode: "grab"
            },
            resize:true
        }
	}
}

class App extends Component{

	constructor(props){
		super(props);
		this.state = defaultState;
	}

	nextState = (newState) => {
		const transition = (data) => {
			if(newState === State.Result){
				this.setResults(data);
			}
				this.setState({state:newState});
		}
		return transition;
	}

	setResults = (data) => {
		this.setState({data:data});
	}

	addQuestions = (questions) => {
		this.setState({questions:questions});
		this.nextState('quiz');
	}

	loadQuestions = async () => {
		this.setState({state:State.Load});
		try {
			const resp = await fetch('/questions?number=3');
			const questions = await resp.json();
			this.setState({questions:questions});
			setTimeout(this.nextState(State.Quiz),1000);
		}
		catch(err){
			console.log(err);
		}
	}

	render() {
		const {state, data, questions} = this.state;
		let page;
		switch(state){
			case State.Start:
				page = <Start onStart={this.loadQuestions}/>
				break;
			case State.Load:
				page = <Load />
				break;
			case State.Quiz:
				page = <Quiz quizQuestions={questions} onDone={this.nextState(State.Result)} />
				break;
			case State.Result:
				page = <Result onRestart={this.nextState(State.Start)} data={data}/>;
				break;
			default:
				page = <p>Why am I in this state</p>;
				break;
		}
		return (
			<div className="app flex flex-column justify-between items-center vh-100 w-100">
				<Particles className="particles" params={particleSettings}/>
				<h1 className="banner white f1">World's Easiest Quiz</h1>
				<div className="ba b--moon-gray br4 bg-near-black o-80 h-50 w-90 box">
					{page}
				</div>
				<div></div>
			</div>
		);
	}

}


				// <p className="cursor-default silver">I'm not responsible for this</p>

export default App;	