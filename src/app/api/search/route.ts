import { NextRequest, NextResponse } from "next/server";
import { Route_SearchApi } from '../../../component/route/context/Route/type.route'
import { axiosDef,axiosPriv } from '../Axios'

const baseUrl= 'https://search.ch/timetable/api/route.json'

export async function GET(req: NextRequest) {
	const from = req.nextUrl.searchParams.get('from') as string;
  const to = req.nextUrl.searchParams.get('to') as string;
  const date = req.nextUrl.searchParams.get('date') as string;

	const res= await fetch(`${baseUrl}?from=${from}&to=${to}`)
	const resArr:Route_SearchApi[]= await res.json()
	return NextResponse.json(resArr)
}

