import React from 'react'
import { ColorValues } from '../../../asset/Color'

export type FontStyling= {
	overFlow?: 'hidden' | 'visible' | 'scroll' | 'auto' | 'clip'
	fontFamily?: 'K2D' | 'Sk-Modernist' | 'Mulish' | 'Lato' | 'Poppins' | 'Lato-Black' | 'Poppins-Black' |'Lato-Bold' | 'Poppins-Bold'
	fontSize?: number
	fontWeight?: 'bold' | '400' | '500' | '600' | '700' | '800' | '900'
	color?: string | undefined
	backgroundColor?: string | undefined
	lineHeight?: number,
	borderRadius?: number
	textAlign?: "center" | "auto" | "left" | "right" | "justify"
}

export type ConvertOptional<T,E>={
	[K in keyof T]?: K extends E
		? never
		: T[K]
}

export type ReactChildren= {
	children: React.ReactElement
}

export type InputChangeEvent= React.ChangeEvent<HTMLInputElement>

export type OnChangeBase<T>= {
	id: string
	onChange: (input:T) => void
	type: any
}

export type InputHandle={
	setValue: (val:string) => void,
	getValue: () => string
	onFocus: () => void
	resetValue: () => void
}

export type InputProps= {
	id: string
	type: any
	placeholder: string
	onSubmit: () => void
	handleChange: () => void
	selectedValue?: string|null
}

