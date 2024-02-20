'use client'
import { SearchReducer, SearchState } from './type.search';

export const searchReducer = (prevState: SearchState, action: SearchReducer):SearchState => {
	switch (action.type) {
		case 'update_locations':
			return {
				...prevState,
				locations: [
					...prevState.locations,
					action.payload
				]
			}	
		case 'update_points':
			return {
				...prevState,
				points: {
					...prevState.points,
					[action.payload.key]: action.payload.value
				}	
			}
		case 'reset_locations':	
			return {
				...prevState,
				locations: []
			}
		default:
			return prevState;
	}
}