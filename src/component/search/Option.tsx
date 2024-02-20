'use client'

import { OptionProps,OptionType, } from './type.search'
import { Station } from './context/Search/type.search'

import './style/Option.css'

const Option= (props:OptionProps<Station>):JSX.Element => {

	const { data, onClick }= props
	
	async function onSelect(param:OptionType<Station>){
		try{
			onClick(param)
		}catch(e){

		}
	}
	return (
		<div className="option" onClick={() => onSelect(data)} >
			<h1>{data.item.name}</h1>
		</div>
	)
}
export { Option }