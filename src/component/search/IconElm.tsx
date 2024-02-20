'use client'


import { StaticImageData } from "next/image"
import './style/IconElm.css'

type IconType= {
	id: string
	alt: string
	icon: StaticImageData |null
	size: number
	onClick: () => void
}

const IconElm= (props:IconType) => {

	function handleClick(){
		try{		
			props.onClick()
		}catch(e){
			console.log(e)
		}
	}

	return(
		<div className={`icon-item`}>
			<img 
					key={props.id} 
					onClick={() => handleClick()}  
					src={props.icon?.src} 
					alt={props.alt} 
					height={props.size} 
					width={props.size}
			/>
		</div>
	)
}

export { IconElm }
