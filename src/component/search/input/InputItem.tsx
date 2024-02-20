'use client'

import React, {useState, useEffect, useRef, forwardRef, useImperativeHandle, ChangeEvent } from 'react'
import { InputHandle, InputProps } from './type.input'
import { useDebounce } from 'src/component/search/hook/UseDebounce'

export const InputItem= forwardRef<InputHandle,InputProps>(({id,placeholder,selectedValue,handleChange,onSubmit},ref) => {
		const [value,setValue]= useState<string>('')
		const inputRef= useRef<HTMLInputElement>(null)

		useImperativeHandle(ref, () => ({
				setValue: (val:string) => setValue(val),
				resetValue: () => setValue(''),
				getValue: () => value,
				onFocus: () => inputRef.current?.focus()
 		}))

		const searchHandler= (e: ChangeEvent<HTMLInputElement>) => {
			const lowerCase= e.target.value.toLowerCase()
			setValue(lowerCase)
		}

		const debouncedCb:(e:React.ChangeEvent<HTMLInputElement>)=>void = useDebounce(searchHandler, 300)
		
		useEffect(() => {
			handleChange()
		},[value])

		return (
				<input 
					id={id} 
					type="text"
					ref={inputRef}
					onChange= {(event) => debouncedCb(event)} 
					placeholder={placeholder}
					onKeyDown={(e) => { 
						if (e.key === "Enter") { 
							onSubmit()
						} 
					}} 
				/>
		)
})

