'use client'

import React,{useEffect,useState} from "react"
import { StaticImageData } from "next/image"
import { RouteIcon } from './RouteIcon'
import { Line } from './Line'
import { Col } from '../layout/Col'
import { Leg } from 'src/component/route/context/Route/type.route'
import train from '../../asset/train.png'
import tram from '../../asset/tram.png'
import walking from '../../asset/walking-man.png'
import express from '../../asset/express.png'
import './style/ConnectionContainer.css'

type TransportData= Leg & {
	icon: StaticImageData |null
}

const Connection = (props:Leg) => {
	
	const [icon,setIcon]= useState<StaticImageData|null>(null)
	
	function getTransportIcon(type:Leg['type']):StaticImageData|null{
		switch(type){
			case 'strain':
				return train
			case 'tram':
				return tram
			case 'walk':
				return walking
			case 'express_train':
				return express
			default:
				return null
		}
	}

	async function handleLegs(){
		try{
			const iconSource:StaticImageData|null= getTransportIcon(props.type)
			setIcon(iconSource)
		}catch(e){
			console.log(e)
		}
	}

	useEffect(() => {
		handleLegs()
	},[props])

	return (
		<Col alignOption="center">
			<>
				{icon===null
					? null
					: <>
							<RouteIcon item={props} icon={icon} />
							<Line {...props} />
						</>
				}
			</>
		</Col>						
	)
};

export { Connection }
