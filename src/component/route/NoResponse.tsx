import React from "react"
import './style/NoResponse.css'

const NoResponse = (props:{text: string}) => {
	return (
		<div className="noresponse-container">
			<h1>{props.text}</h1>
		</div>
	)
};

export { NoResponse }
