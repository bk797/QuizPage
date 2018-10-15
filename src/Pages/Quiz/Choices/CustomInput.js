import React from 'react';
import './CustomInput.css';


const CustomInput = ({onChoose}) => {

	let input = React.createRef();

	const submitAnswer = (event) => {
		if(event.key === "Enter"){
			let val = event.target.value;
			Number.isNaN(Number(val)) ? onChoose(val) : onChoose(Number(val));
			event.target.value = '';
		}
	}

	const focus = () => {
		input.current.focus();
	}


	return (
		<div className={customBox} onClick={focus}>
			<input className={customInput} ref={input} type="text" placeholder="Write Your Own Answer" onKeyPress={submitAnswer}/>
		</div>
	);
}

const customBox = "fl w-70 ma2 ba bg-dark-gray br-pill flex justify-center grow pointer"

const customInput = "fl w-80 f3 moon-gray bg-dark-gray ba b--dark-gray br-pill pointer"

export default CustomInput