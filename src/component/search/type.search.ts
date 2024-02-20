import React from 'react'

export type ReactChildren= {
	children: React.ReactNode
}
export type InputChangeEvent= React.ChangeEvent<HTMLInputElement>

export type KeysOfT<T,TCondition> = {
	[K in keyof T]: T[K] extends TCondition
		? K
		: never
}[keyof T];

export type ButtonProps={
	text: string
	name: string
	onClick: () => void
}

export type Base<T>= SearchParam & {
	selected: OptionType<T>[]
	noResponseText: string
	setData: React.Dispatch<React.SetStateAction<OptionType<T>[]|[]>>
}

export type ListWithButtonProps={
	listComp: React.ReactNode,
	buttonComp: React.ReactNode
	setIsVisible: React.Dispatch<React.SetStateAction<Boolean>>
}

export type OnChangeBase<T>= ReactChildren & {
	id: string
	data: OptionType<T>[]
	onChange: (params: SearchParam) => void
}

export type SearchParam= {
	search: string
}

export type InputProps= ReactChildren & {
	onChange: (param: SearchParam) => void
}

export type OnChangeInputType<T>= SearchParam & {
	key: KeysOfT<OptionType<T>,string>
}

export type InputId= 'from'|'to'

export type OptionType<T>={
	id: string
	type: InputId
	state: boolean,
	item: T
}

export type OptionsType<T>={
	from: OptionType<T>[],
	to: OptionType<T>[]
}

export type OptionProps<T>= {
	data: OptionType<T>
	onClick: (params:OptionType<T>) => void
}

export type SelectBoxProps={
	state: boolean
}

export type NoData= {
	id: InputId
	noResponseText: string
	data: []
}

export type SearchType<T>= {
	id: InputId
	noResponseText: string
	data: OptionType<T>[]
	onSelect: () => void
}

export type InputValType={
	from: string|undefined|null
	to: string|undefined|null
}

export type OptionListProps<T>= SearchType<T>