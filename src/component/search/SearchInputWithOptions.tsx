'use client'

import React,{ useState,useMemo,useEffect } from "react"
import { useSearchDispatch } from 'src/component/search/context/Search/SearchContext'
import { InputId,OptionType } from './type.search'
import { Option } from './Option'
import { Station } from './context/Search/type.search'
import { useSearch } from "./hook/UseSearch"
import './style/OptionList.css'

type WithOptionsProps={
	id: InputId
	inputElm: React.ReactNode,
	data: OptionType<Station>[]
}

const SearchInputWithOptions = (props:WithOptionsProps) => {
  const {id,inputElm,data } = props;
	const [isVisible,setIsVisible]= useState<{id:InputId,state:Boolean}>({id,state:false})
	const { updatePoints }= useSearchDispatch()

	const content = useMemo(() => {
		if(data.length){
			return data?.map((item:OptionType<Station>,index:number) => {
				return <Option onClick={handleSelect} key={`${item.item.id}${item.state}`} data={item} />				
			})
		}
		return null //<h1 className="no-data">{noResponseText}</h1>
	},[data])

	function handleSelect(data:OptionType<Station>){
		try{
			updatePoints({ key: data.type, value: data.item.name})
			handleVisibility(id,false)
		}catch(e){
			console.log(e)
		}
	}

	function handleVisibility(id:InputId,state:boolean):void{
		setIsVisible({id,state})
	}

	return (
		<>
			<div onClick={() => handleVisibility(id,!isVisible.state)}>
				{inputElm}
			</div>
			{data.length && isVisible.id===id && isVisible.state
				?	<div className={`option-list option-list-animation scrollable-vertical ${data.length ? '' : 'invisible'}`} data-testid="option-list">			
						{data.length ?content :null}  
					</div> 
				: null
			}			
		</>
	)
}

export { SearchInputWithOptions }
