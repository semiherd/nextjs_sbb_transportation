'use client'

import React from "react"
import { Leg } from 'src/component/route/context/Route/type.route'
import { Connection } from './Connection'
import { Row } from '../layout/Row'
import './style/ConnectionContainer.css'

const ConnectionIcons = ({data}:{data:Leg[]}) => {
	
	return (
		<Row rowWidth={60} alignOption="center">
			<>{data.length 
					? data.map((item,index) => {
							return (
								<div key={index} className="route-icon">
										<Connection {...item} />
								</div>
							)
						})
					: null
			}</>
		</Row>
	)
};

export { ConnectionIcons }
