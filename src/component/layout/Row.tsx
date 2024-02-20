export type AlignOptions= 'center' | 'space-around' | 'space-between' | 'flex-end' | 'flex-start'
export type AlignSelfOptions= 'center' | 'flex-end' | 'flex-start'

export const Row = (
	{ rowWidth,alignOption,children }:
	{rowWidth:number,alignOption:AlignOptions,children:React.ReactElement}) => (
		<div style={{
			display: 'flex',
			margin: '1%',
			flexDirection: "row",
			width: `${rowWidth}vw`,
			justifyContent: alignOption || 'center',
		}}>{children}</div>
 )