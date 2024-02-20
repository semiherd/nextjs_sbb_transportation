'use client'

import React, { useMemo } from "react"
import { searchReducer } from './SearchReducer'
import { SearchState, SearchApi } from "./type.search"
import { Station, Location } from './type.search'

const SearchStateCtx= React.createContext<SearchState>({} as SearchState)
const SearchDispatchCtx= React.createContext<SearchApi>({} as SearchApi)

function SearchProvider({ children }:{children: React.ReactNode}) {
   
    const initialState:SearchState= {
			points: {
				from: null,
				to: null
			},
			locations: [] 
    }

    const [state, dispatch] = React.useReducer(searchReducer, initialState)
    
    const api = useMemo(() => {	

			async function updateLocations(param:Location){
				try{
					dispatch({
						type: 'update_locations',
						payload: param
					})
				}catch(e){
					console.log(e)
				}
			}

			async function updatePoints(param:{key:'to'|'from',value:string}){
				try{
					dispatch({
						type: 'update_points',
						payload: param
					})
				}catch(e){
					console.log(e)
				}
			}

			async function resetLocations(){
				try{
					dispatch({
						type: 'reset_locations',
					})
				}catch(e){
					console.log(e)
				}
			}
			
			async function getStations(location:string):Promise<{stations: Station[]}>{
				try{
					const uri:string= `http://localhost:3000/api/location?query=${location}`
					const response= await fetch(
						uri,
						{ 
							method: 'GET',
							headers: {
								"Content-Type": "application/json"
							},
						}
					)
					return response.json()
				}catch(e){
					return { stations: [] }
				}
			}

      return { 
        updateLocations,
				resetLocations,
				updatePoints,
				getStations
      }
    },[])

  return (
    <SearchStateCtx.Provider value={state}>
    <SearchDispatchCtx.Provider value={api}>
      {children}
    </SearchDispatchCtx.Provider>
    </SearchStateCtx.Provider>
  )
}

function useSearchState() {
    const context = React.useContext(SearchStateCtx);
    
    if (context === undefined) {
      throw new Error('useProgressState must be used within a ProgressProvider');
    }
    return context;
 
}

function useSearchDispatch() {
    const context = React.useContext(SearchDispatchCtx);
    if (context === undefined) {
      throw new Error('useProgressDispatch must be used within a ProgressProvider');
    }
    return context;
}

export { SearchProvider, useSearchState, useSearchDispatch }