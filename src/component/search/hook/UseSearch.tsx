'use client'

import { useEffect,useState } from 'react' 
import { useSearchDispatch, useSearchState } from '../context.tsx/Search/SearchContext'
import { Location, Station } from "../context.tsx/Search/type.search";
import { OptionsType,OptionType,InputValType,InputId } from '../type.search'

function useSearch(){
		const { points,locations }= useSearchState()
		const { getStations, updatePoints, updateLocations }= useSearchDispatch()
		const [options,setOptions]= useState<OptionsType<Station>>({from:[],to:[]})

		async function onPointsUpdate(param:{key:'from'|'to',value: string}):Promise<void>{
			try{
				updatePoints(param)
			}catch(e){
				console.log(e)
			}
		}

		async function checkInState(l:string):Promise<Location|null>{
			try{
				const inState:Location[]= await Promise.all(locations.filter((loc:Location,index:number) => loc.name=== l ))
				if(inState.length) return inState[0]
				else return null
			}catch(e){
				console.log(e)
				return null
			}
		}

		async function checkSearchState(location:string):Promise<void>{
			try{
				const inState:Location|null= await checkInState(location)
				if(inState===null){
					const {stations}:{stations: Station[]}= await getStations(location)
					updateLocations({
						name: location,
						stations
					})
				}
			}catch(e){
				console.log(e)
			}
		}

		async function handleStations():Promise<void>{
			try{
					const { from , to } = points
					if(from!==null) {
						await checkSearchState(from)
					}
					if(to!==null) {
						await checkSearchState(to)
					}
					
				}catch(e){
					console.log(e)
			}
		}

		async function handlePointsChange(from:string,to:string){
			try{		
				if(typeof(to)=='string'){
					onPointsUpdate({key: 'to',value: to})
				}
				if(typeof(from)=='string'){
					onPointsUpdate({key: 'from',value: from})
				}		
			}catch(e){
				console.log(e)
			}
	
		}

		async function handleOptionsArray(arr:Station[],type:InputId){
			try{
				if(arr?.length){
					const param: OptionType<Station>[]= await Promise.all(arr?.map(item => {
						return {
							id: item.id,
							type: type,
							state: false,
							item
						}
					}))
					setOptions((prev) => ({ ...prev, [type]: param }))	
				}else setOptions((prev) => ({ ...prev, [type]: [] }))			
			}catch(e){
				console.log(e)
			}
		}

		async function handleOptions(param:InputValType):Promise<void>{
			try{
				const {from,to}= param
				if(locations.length){
					const fromArr= locations.filter(i => i.name === from )
					const toArr= locations.filter(i => i.name === to )
					await handleOptionsArray(fromArr.length ? fromArr[0].stations : [],'from')
					await handleOptionsArray(toArr.length ? toArr[0].stations : [],'to')		
				}
			}catch(e){
				console.log(e)
			}
		}

		async function swapPoints(){
			try{
				const { from, to }= points
				updatePoints({key: 'to', value: from===null ?'':from })
				updatePoints({key: 'from', value: to===null ?'':to })
			}catch(e){
				console.log(e)
			}
		}
		
		useEffect(() => {
			handleStations()
		},[points])

    return {
			handleStations,
			onPointsUpdate,
			handlePointsChange,
			options,
			handleOptionsArray,
			handleOptions,
			points,
			swapPoints
		}
}

export { useSearch }