'use client'

import { useRef,useEffect } from 'react'
import { InputItem } from './input/InputItem'
import { InputHandle } from './input/type.input'
import { SearchInputWithOptions } from './SearchInputWithOptions'
import { useSearch } from './hook/UseSearch'
import { useSearchState } from 'src/component/search/context.tsx/Search/SearchContext'
import { InputValType } from './type.search'
import { Col } from '../layout/Col'
import './style/SearchBar.css'
import { IconElm } from './IconElm'
import swap from '../../asset/swap.png'
import { Row } from '../layout/Row'

const SearchBar= () => {

	const { handlePointsChange,handleOptions,options,swapPoints }= useSearch()
	const { points, locations }= useSearchState()
	const departureInputRef= useRef<InputHandle>(null)
	const arrivalInputRef= useRef<InputHandle>(null)
	
	const getInputValues= ():InputValType => {
		try{
			const from:string|undefined= departureInputRef.current?.getValue()
			const to:string|undefined= arrivalInputRef.current?.getValue()
			return {
				from,to
			}
		}catch(e){
			console.log(e)
			return{
				from: null,
				to: null
			}
		}
	}
	const handleChange= async () => {
		try{
			const {from,to}:InputValType= getInputValues()
			await handlePointsChange(from ?from:'',to ?to:'')		
		}catch(e){
			console.log(e)
		}
	}

	const handleKeyDown= async () => {
		const {from,to}:InputValType= getInputValues()
		if(!from?.length){
			departureInputRef.current?.onFocus()
		}
		if(!to?.length){
			arrivalInputRef.current?.onFocus()
		}
	}

	useEffect(() => {
		handleOptions(getInputValues())
	},[points,locations])

	return (
		<Row rowWidth={50} alignOption='center'>
				<>
				<Col alignOption='center'>
					<div className="input-container">
						<SearchInputWithOptions
							id='from'
							data={options.from}
							inputElm={<InputItem 
								id={`from`}
								handleChange={handleChange}
								ref={departureInputRef}
								type={`default`}
								placeholder={`Departure`}
								onSubmit={handleKeyDown}
								selectedValue={points.from}
								/>}
						/>
						<SearchInputWithOptions
							id='to'
							data={options.to}
							inputElm={<InputItem 
								id={`to`}
								handleChange={handleChange}
								ref={arrivalInputRef}
								type={`default`}
								placeholder={`Arrival`}
								onSubmit={handleKeyDown}
								selectedValue={points.to}
							/>}
						/>
					</div>
				</Col>	
				<div className="swap-icon">
					<IconElm id="route-swap" alt="route-swap" icon={swap} size={50} onClick={swapPoints} />				
				</div>
			</>
			</Row>	
	)
}
export { SearchBar }