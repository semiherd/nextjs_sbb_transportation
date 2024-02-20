import React from 'react'
import { SearchContainer } from 'src/component/search/SearchContainer'
import { RouteContainer } from 'src/component/route/RouteContainer'
import { RouteProvider } from 'src/component/route/context/Route/RouteContext'
import { SearchProvider } from 'src/component/search/context.tsx/Search/SearchContext'


export default function Home() {
  return (
    <>
			<SearchProvider>
				<SearchContainer />
				<RouteProvider>
					<RouteContainer />
				</RouteProvider>
			</SearchProvider>
		</>
  );
}
