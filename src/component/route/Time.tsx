'use client'

import React from "react"
import { Row } from '../layout/Row'
import { Col } from '../layout/Col'
import { RouteTimeCard } from './type'
import './style/Time.css'

const Item= (props:{label:string|null,value:string|null}) => {
	
	return (
		<Col alignOption="center">
			<>
				<h1 className="label">{props.label===null ?'' :props.label}</h1>
				<h1 className="time">{props.value===null ?'' :props.value}</h1>
			</>
		</Col>
	)
}

const Time = ( props: RouteTimeCard) => {
	
	const { from, to, duration}= props
	
	return (
			<Row rowWidth={60} alignOption="space-around">
				<>
					<Item label={from.label} value={from.value}/>
					<h1 className="duration">{duration ?duration :''}</h1>
					<Item label={to.label} value={to.value}/>
				</>
			</Row>	
	)
}

export { Time }
