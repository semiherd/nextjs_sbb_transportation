'use client'

import React from "react"
import './style/TransportItem.css'
import { Connection } from 'src/component/route/context/Route/type.route'
import { Time } from './Time'
import { ConnectionContainer } from './ConnectionContainer'
import { RouteCard } from './RouteCard'
import { withTime } from './WithTime'

const TransportItem = ({data}:{data:Connection}) => {
	
			
	const RouteComponent= withTime(Time,{type:'route', data: data })

	return (
		<div className="transport-item">
			{data ?<RouteComponent /> :null}
			{data ?<ConnectionContainer data={data} /> :null}
			{data ?<RouteCard data={data} /> :null}
		</div>
	)
}

export { TransportItem }
