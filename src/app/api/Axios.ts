import axios from 'axios'

const baseUrl= 'http://transport.opendata.ch/v1/stationboard'
const apiKey:string= process.env.DATA_API_KEY as string


export const axiosDef=  axios.create({
	baseURL: baseUrl
})	

export const axiosPriv= (param:string) => axios.create({
	baseURL: `${baseUrl}${param}`,
	headers:{
		'Content-Type': 'application/json',
		'API-Key': apiKey
	},
	//withCredentials: true
})
