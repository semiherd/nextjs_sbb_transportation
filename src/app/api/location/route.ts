
const baseUrl= 'http://transport.opendata.ch/v1/locations'

import { NextResponse, NextRequest } from 'next/server';
import { Route_SearchApi } from 'src/component/route/context/Route/type.route';

export async function GET(req: NextRequest) {
  const location = req.nextUrl.searchParams.get('query') as string;
	
	const res= await fetch(`${baseUrl}?query=${location}`)
	const resArr:Route_SearchApi[]= await res.json()
	return NextResponse.json(resArr)
}
