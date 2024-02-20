import { Leg,Connection } from 'src/component/route/context/Route/type.route'

export type NarrowIncluding<Key,U>= Key extends U? Key : never

export type SubType<T,U>={
	[key in keyof T as NarrowIncluding<key,U>]: T[key]
}

type Single={
	type: 'leg',
	data: Leg
}

type Multiple={
	type: 'route', 
	data: Connection
}
export type BaseParams= Single | Multiple
export type TimeCardType= BaseParams['type']

export type LabelValue= {
	label: string|null
	value: string|null
}

export type RouteTimeCard={
	from : LabelValue
	to: LabelValue
	duration: string|null
}