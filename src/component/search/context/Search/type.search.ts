import { Points } from "../../../route/context/Route/type.route"

type Ext<T,U>= T extends U ?T :never

export type SearchApi={
	updateLocations: (param:Location) => void
	updatePoints: (param:{key:'to'|'from',value:string}) => void
	resetLocations: () => void
	getStations: (param:string) => Promise<{stations: Station[]}>
}

export type Station= {
	id: string
	name: string
	score: string | null
	coordinate: {
		type: string
		x: number
		y: number
	}
	distance: null | number | string
}

export type Location={
	name: string,
	stations: Station[]
}

export type SearchState={
	points: Points
	locations: Location[]
}

type UpdateLocations= {
	type: 'update_locations',
	payload: Location
}
type UpdatePoints= {
	type: 'update_points',
	payload: {
		key: 'to',value:string
	}|{
		key: 'from',value:string
	}
}
type ResetLocations= {
	type: 'reset_locations',
}

export type SearchReducer=  UpdateLocations | ResetLocations | UpdatePoints

