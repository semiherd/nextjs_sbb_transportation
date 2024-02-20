'use client'

import { RouteList } from './RouteList'
import { useRoute } from './hook/UseRoute'
import { Route_SearchApi } from 'src/component/route/context/Route/type.route'
import { SubType } from 'src/component/route/type'
import './style/RouteContainer.css'

const RouteContainer= () => {
	const {data}:{data:Route_SearchApi|null}= useRoute()

	return (
			<div className="route-container">
				{data!==null && data.connections?.length
					? <>
							<h1>Search Result</h1>
							<RouteList {...data} />
						</>
					:null
				}
			</div>
	)
}

export { RouteContainer }