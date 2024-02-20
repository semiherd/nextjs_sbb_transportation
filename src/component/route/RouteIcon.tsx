'use client'

import { useState, useEffect } from 'react'
import { Leg } from 'src/component/route/context/Route/type.route'
import { StaticImageData } from "next/image"
import { useRouteState, useRouteDispatch } from "src/component/route/context/Route/RouteContext"
import './style/RouteIcon.css'

type TransportData= {
	item: Leg
	icon: StaticImageData |null
}

const RouteIcon= (props:TransportData):JSX.Element => {
	const { routeCard }= useRouteState()
	const { openRouteModal,closeRouteModal }= useRouteDispatch()
	const [state,setState]= useState<'active'|'inactive'>('inactive')

	async function handleClick({item,icon}:TransportData){
		try{		
			if(routeCard===null || routeCard.tripid!==item.tripid){
				await openRouteModal(item)
			}else{
				await closeRouteModal()
			}
		}catch(e){
			console.log(e)
		}
	}

	function handleState():void{
		try{
			const selected:boolean= routeCard?.stopid === props.item.stopid ?true :false
			setState(selected? 'active':'inactive')
		}catch(e){
			setState('inactive')
		}
	}

	useEffect(() => {
		handleState()
	},[routeCard])

	return(
		<div className={state}>
			<img 
					key={props.item.tripid} 
					onClick={() => handleClick(props)}  
					src={props.icon?.src} 
					alt={props.item.type_name} 
					height={25} 
					width={25}
			/>
		</div>
	)
}

export { RouteIcon }
