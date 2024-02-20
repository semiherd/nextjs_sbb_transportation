export type AlignOptions= 'center' | 'space-around' | 'space-between' | 'flex-end' | 'flex-start'
export type AlignSelfOptions= 'center' | 'flex-end' | 'flex-start'

export const Col = (
	{ alignOption,children }:
	{ alignOption:AlignOptions,children:React.ReactElement}) => (
		<div style={{
			display: 'flex',
			margin: '1%',
			flexDirection: "column",
			justifyContent: alignOption || 'center',
		}}>{children}</div>
 )