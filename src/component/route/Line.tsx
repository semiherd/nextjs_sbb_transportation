'use client'
import React from "react"
import { Leg } from './context/Route/type.route'
import './style/Line.css'

const Line = (props:Leg) => {
	if(props.type==='walk')
		return <h1 className="line walk">-</h1>
	return <h1 className="line">{props['*G']} {props['*L']}</h1>
};

export { Line }
