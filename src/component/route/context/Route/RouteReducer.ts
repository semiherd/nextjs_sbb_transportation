'use client'
import { RouteReducer, RouteState } from './type.route';

export const routeReducer = (prevState: RouteState, action: RouteReducer):RouteState => {
	switch (action.type) {
		case 'open_transportmodal':
			const { x,y,line,departure}= action.payload
			const cardId:string=`${x}_${y}_${line}_${departure}`
			return {
				...prevState,
				cardId,
				routeCard: action.payload
			}		
		case 'close_transportmodal':
			return {
				...prevState,
				cardId:null,
				routeCard: null,			
			}
		case 'update_points':
			return {
				...prevState,
				points: action.payload,			
			}
		default:
			return prevState;
	}
}