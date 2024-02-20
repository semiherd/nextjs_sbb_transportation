'use client'

import {useEffect} from 'react'
import { NoResponse } from './NoResponse'
import { TransportItem } from './TransportItem'
import { useRouteDispatch } from 'src/component/route/context/Route/RouteContext'
import { Route_SearchApi, Connection } from 'src/component/route/context/Route/type.route'
import { SubType } from 'src/component/route/type'
import './style/RouteList.css'

const RouteList= ({connections,points}:SubType<Route_SearchApi,'connections'|'points'>) => {
	const { updatePoints }= useRouteDispatch()
	
	async function handlePoints(){
		updatePoints({
			from: points[0].text,
			to: points[1].text
		})
	}

	useEffect(() => {
		if(points) handlePoints()
	},[points])

	return (
			<div className="route-list">
				{connections
					? connections.map((item:Connection,index:number) => <TransportItem key={index.toString()} data={item} /> )
					: points?.length 
							? <NoResponse text={`No Route found between`} />
							: null 
				}
			</div>
	)
}

export { RouteList }