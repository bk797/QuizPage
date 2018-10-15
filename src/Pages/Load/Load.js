import React from 'react';
import ReactLoading from 'react-loading';


const Load = ({onLoad}) => {
	return(
		<div className="flex flex-column justify-center items-center h-100">
			<ReactLoading className="mv5"type={"spokes"} />
			<h1 className="f2 moon-gray cursor-default">Loading</h1>
		</div>
	);
}

export default Load;