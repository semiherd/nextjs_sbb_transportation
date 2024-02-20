'use client'

import React ,{ useEffect,useState } from "react"
import { Connection } from 'src/component/route/context/Route/type.route'
import { ConnectionIcons } from './ConnectionIcons'
import './style/ConnectionContainer.css'
import { useRouteDispatch } from "./context/Route/RouteContext"

const ConnectionContainer = (props:{data:Connection}) => {
	const { closeRouteModal }= useRouteDispatch()
	const [con,setCon]=useState<number>(0)
	const [state,setState]=useState<boolean>(false)
	
	async function ignoreWalking(){
		try{
			const conList= props.data.legs.filter(item => item.type!=='walk' && item.isaddress!==true)			
			setCon(conList.length-1)
		}catch(e){
			console.log(e)
		}
	}

	async function toggleConContainer(){
		try{
			closeRouteModal()
			setState((prev) => !prev)
		}catch(e){
			console.log(e)
		}
	}

	useEffect(() => {
		ignoreWalking()
	},[props.data.legs])

	return (
		<>
			<h1 onClick={toggleConContainer} className="connection">{con} {con>1 ?'Connections' :'Connection'}</h1>
			{state 
				? <ConnectionIcons data={props.data.legs} />
				: null
			}
		</>
	)
};

export { ConnectionContainer }
