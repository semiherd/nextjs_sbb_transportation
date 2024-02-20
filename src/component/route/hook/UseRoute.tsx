'use client'

import { useEffect, useState } from 'react' 
import { useSearchState } from '../../search/context.tsx/Search/SearchContext'
import { useRouteDispatch } from 'src/component/route/context/Route/RouteContext';
import { Route_SearchApi } from 'src/component/route/context/Route/type.route'

function useRoute(){
		const { points }= useSearchState()
		const [ data, setData]= useState<Route_SearchApi|null>(null)
		const { updatePoints,getRoutesByLocation }= useRouteDispatch()

		async function handlePoints(){
			try{
				updatePoints({
					from: points.from,
					to: points.to
				})
			}catch(e){
				console.log(e)
			}
		}

		async function handleData(){
			try{	
				if(points?.from?.length,points?.to?.length){
					const list:Route_SearchApi|null= await getRoutesByLocation(points.from!,points.to!)	
					setData(list)
				}else setData(null)
			}catch(e){
				setData(null)
			}
		}

		useEffect(() => {
			handlePoints()
			handleData()
		},[points])

    return { data }
}

export { useRoute }