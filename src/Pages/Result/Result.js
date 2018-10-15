import React from 'react';


const Result = ({onRestart,data}) => {
	const {numRight,total} = data;
	console.log(data);
	return(
		<div className="cursor-default moon-gray h-100 flex flex-column items-center justify-between">
			<h2 className="f2">You Made It!</h2>
			<p className="f3 measure">{`you got ${numRight} out of ${total} right!`}</p>
			<button className="h3 w-50 mb3 moon-gray bg-dark-gray ba grow br-pill f3" onClick={onRestart}>Play Again</button>
		</div>
	)
}

export default Result;