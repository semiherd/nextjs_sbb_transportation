'use client'
import React, { useMemo } from "react"
import { routeReducer } from './RouteReducer'
import {  Points,Leg,RouteState, RouteApi, Route_SearchApi } from "./type.route"

const RouteStateCtx= React.createContext<RouteState>({} as RouteState)
const RouteDispatchCtx= React.createContext<RouteApi>({} as RouteApi)

function RouteProvider({ children }:{children: React.ReactNode}) {
    
    const initialState:RouteState= {
      cardId: '',
			routeCard: null,
      points:{
        from: null,
        to: null,  
      }
    }

    const [state, dispatch] = React.useReducer(routeReducer, initialState)
    
    const api = useMemo(() => {	

			async function openRouteModal(param:Leg){
				try{
					dispatch({
						type: 'open_transportmodal',
						payload: param
					})
				}catch(e){
					console.log(e)
				}
			}

			async function closeRouteModal(){
				try{
					dispatch({
						type: 'close_transportmodal'
					})
				}catch(e){
					console.log(e)
				}
			}

			async function updatePoints(param:Points){
				try{
					dispatch({
						type: 'update_points',
            payload: param
					})
				}catch(e){
					console.log(e)
				}
			}

      async function getRoutesByLocation(from:string,to:string):Promise<Route_SearchApi>{
        const base= `http://localhost:3000/api/search`
        const date:string="2023-03-15"
        const paramString= `from=${from}&to=${to}&date=${date}`
        //const response = await basicFetch<RouteSearch[]>(`${base}?${paramString}`);
        const response= await fetch(
          `${base}?${paramString}`,
          { method: "GET" }
        )
        return response.json()
      }

      return { 
        openRouteModal,
				closeRouteModal,
        updatePoints,
        getRoutesByLocation
      }
    },[])

  return (
    <RouteStateCtx.Provider value={state}>
    <RouteDispatchCtx.Provider value={api}>
      {children}
    </RouteDispatchCtx.Provider>
    </RouteStateCtx.Provider>
  )
}

function useRouteState() {
    const context = React.useContext(RouteStateCtx);
    
    if (context === undefined) {
      throw new Error('useProgressState must be used within a ProgressProvider');
    }
    return context;
 
}

function useRouteDispatch() {
    const context = React.useContext(RouteDispatchCtx);
    if (context === undefined) {
      throw new Error('useProgressDispatch must be used within a ProgressProvider');
    }
    return context;
}

export { RouteProvider, useRouteState, useRouteDispatch }