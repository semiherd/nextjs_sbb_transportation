type Ext<T,U>= T extends U ?T :never

export type Points={
	from: null | string
	to: null | string
}

export type Leg=  Stop & {
	'*G': string
	'*L': string
	'*Z': string
	bgcolor: string
	fgcolor: string
	line: string
	normal_time: number
	operator: string
	runningtime: number
	sbb_name: string
	terminal: string
	track: string
	tripid: string
	type: 'strain'|'tram'|'walk'|'express_train'
	type_name: string
	waittime:number
	stops: Stop[]
	exit: Exit
	disruptions: string[]
	attributes: any
	isaddress?:boolean
}

export type Coordinate={
	x: number
	y: number
}

export type LatLon={
	lat: number
	lon:number
}
export type Time={
	arrival: string
	departure: string
}
export type Exit= LatLon & Coordinate & {
	arrival: Time['arrival']
	sbb_name: string
	name: string
	stopid: string
	waittime: number
	track: string	
}
export type Stop=  LatLon & Time & Coordinate & {
	name: string
	stopid: string
}
export type Connection= Points & Time & {
	disruptions: string[]
	duration: number
	is_main: boolean
	legs: Leg[]
}

export type Point= Coordinate  & LatLon & {
	id: string
	text: string
	url: string
}

export type Route_SearchApi= {
	count: number
	description: string
	min_duration: number
	max_duration: number
	maxtime: number
	rawtime: number
	connections: Connection[]
	points: Point[]
}

export type RouteApi={
	openRouteModal: (param: Leg) => Promise<void>
	closeRouteModal: () => Promise<void>
	updatePoints: (param:Points) => void
	getRoutesByLocation: (from:string,to:string) => Promise<Route_SearchApi>
}

export type RouteState={
	cardId: string|null
	routeCard: Leg | null
	points: Points
}

type OpenTransportModal= {
	type: 'open_transportmodal',
	payload: Leg
}
type UpdatePoints= {
	type: 'update_points',
	payload: {
		from : string |null,
		to: string|null
	}
}
type CloseTransportModal= {
	type: 'close_transportmodal'
}

export type RouteReducer=  OpenTransportModal | CloseTransportModal | UpdatePoints
