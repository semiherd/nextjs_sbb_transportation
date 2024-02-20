'use client'

import { SearchBar } from './SearchBar'
import { useSearch } from './hook/UseSearch'
import './style/SearchContainer.css'
import './style/SearchBar.css'

const SearchContainer= () => {
	const { swapPoints }= useSearch()
	return (
		<div className="search-container">
			<div className="search-bar">
				<SearchBar />
			</div>			
		</div>
	)
}
export { SearchContainer }