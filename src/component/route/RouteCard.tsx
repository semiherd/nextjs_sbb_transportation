'use client'

import React,{ useEffect, useState, useRef, MutableRefObject } from "react"
import { useRouteState, useRouteDispatch } from "src/component/route/context/Route/RouteContext"
import { useClickOutside } from '../../hook/UseClickOutside'
import { Time } from './Time'
import { withTime } from './WithTime'
import { Connection, Leg } from 'src/component/route/context/Route/type.route'
import './style/RouteCard.css'
import './style/RouteIcon.css'

const RouteCard = ({data}:{data:Connection}) => {
	const { routeCard, cardId }= useRouteState()
	const { closeRouteModal }= useRouteDispatch()
	const [ cardVisible,setCardVisible]= useState<boolean>(false)
	
	const modalRef = useRef() as MutableRefObject<HTMLInputElement>;
	const onclickOut= () => closeRouteModal()
	useClickOutside(modalRef,onclickOut)
	
	const LegComponent= withTime(Time,{ type:'leg', data: routeCard! })
	
	function createId(item:Leg):string{
		const { x,y,line,departure}= item
		const cardId:string=`${x}_${y}_${line}_${departure}`
		return cardId
	}

	async function handleCardVisibility(){
		try{	
			if(cardId!==null){			
				const legIdList:string[]= await Promise.all(data.legs.map((item) => createId(item)))
				if(legIdList.includes(cardId))
					setCardVisible(true)
				else
					setCardVisible(false)
			}else
				setCardVisible(false)
		}catch(e){
			console.log(e)
		}
	}

	useEffect(() => {
		handleCardVisibility()
	},[cardId])

	return (
		<>
			{cardVisible
				?	<div ref={modalRef} className={routeCard===null ?'' : 'modal-in-animation'}>
						<LegComponent />
					</div>
				: null
			}
		</>
	)
}

export { RouteCard }
