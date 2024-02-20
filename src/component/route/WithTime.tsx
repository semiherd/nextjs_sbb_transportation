import React,{ useState,useEffect } from 'react'
import { BaseParams, RouteTimeCard, LabelValue } from './type'

const withTime= <TProps extends RouteTimeCard>(
	Component: React.ComponentType<TProps>,
	params: BaseParams
) => {

	return () => {
		const { data, type }= params

		const [timeObj,setTimeObj]= useState<RouteTimeCard>({
			duration: null,
			from: {
				label: null, value:null
			},
			to: {
				label: null, value:null
			},
		})

		function getHourMinute(item:string|Date):string{
			const data:{h:string,m:string}= {
				h: new Date(item).getHours().toString(),
				m: new Date(item).getMinutes().toString()
			}
			const hour= parseInt(data.h)<10? `0${data.h}`:data.h
			const minute= parseInt(data.m)<10? `0${data.m}`:data.m
			return `${hour}:${minute}`
		}

		async function handleValues(){
			try{
				if(data?.arrival!==null && data?.departure!==null){
					const response= await Promise.all([
						getHourMinute(data.departure),
						getHourMinute(type==='leg'? data.exit.arrival :data.arrival),
					])
					console.log('getHourMinute response',type,':',data,response)
					const departParam:LabelValue= type==='leg'
						? { label: data.sbb_name, value: response[0] }
						: { label: data.from, value: response[0] }
					
					const arriveParam:LabelValue= type==='leg'
						? { label: data.terminal, value: response[1] }
						: { label: data.to, value: response[1] }
					
					const durationParam:string|null= await handleDuration(params)
					setTimeObj({
						duration: durationParam,
						from: departParam,
						to: arriveParam
					})
				}
			}catch(e){
				console.log(e)
			}
		}

		async function handleDuration({type,data}:BaseParams):Promise<string|null>{
			try{
				const d:number= type==='leg' ?data.runningtime/3600 :type==='route' ?data.duration/3600 :0
				const m:number= 60*(d - Math.floor(d))
				const h:string= d.toString().split('.')[0]
				const hour:string= h==='0' ?'' : `${h} h`;
				const min:string= m===0 ?'' : `${Math.round(m)} min`;
				return `${hour} ${min}` as const
			
			}catch(e){
				return null
			}
		}

		useEffect(() => {
			if(data) handleValues()
		},[data])

		if(timeObj){
			return <Component  {...timeObj} />		
		}
		return null	
	}
}

export {
	withTime
}