import React from 'react';


const Start = ({onStart}) => {

	return (
		<div className="cursor-default moon-gray h-100 flex flex-column items-center justify-between">
			<div/>
			<p className="f2 measure center">
			Welcome! Even I don't know what you'll be asked, but I'm sure it'll be easy.  Good Luck!
			</p>
			<button className="h3 w-50 mb3 moon-gray bg-dark-gray ba grow br-pill f3 pointer" onClick={onStart}>Start</button>
		</div>

	);


}

export default Start;