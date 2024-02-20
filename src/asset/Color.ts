export const Color={  
	transparent: 'transparent',
	blue: 'rgba(83, 148, 163, 1)', //'#5394A3',
	blue12: 'rgba(83, 148, 163, 0.12)', //#5394A3 12% profile overtime-icon bg
	blue102_1: 'rgba(102, 162, 175, 1)', //#66A2AF  home-screen tab-background
	blue102_11: 'rgba(102, 162, 175, 0.11)', //#66A2AF  
	blue18: 'rgba(102, 162, 175, 0.18)', //#66A2AF 18% home-screen tab-background
	blue24: 'rgba(83, 148, 163, 0.24)', //#5394A3 24% roster exchange-icon bg
	blue80: 'rgba(83, 148, 163, 0.8)', //#5394A3 80% message-item bgColor
	blue41: 'rgba(41, 108, 122, 1)', //#296C7A
	gray: '#616161',
	white: 'rgba(255, 255, 255, 1)', // #FFFFFF
	white8: 'rgba(0, 0, 0, 0.008)',  // #000000 8%
	white15: 'rgba(0, 0, 0, 0.015)', // #000000 15%
	black: 'rgba(0, 0, 0, 1)', // #000000
	black6: 'rgba(0, 0, 0, 0.06)', // #000000 6%
	black11: 'rgba(0, 0, 0, 0.11)', // #000000 11%
	black30: 'rgba(0, 0, 0, 0.3)', // #000000 3%
	black47: 'rgba(0, 0, 0, 0.47)', // #000000 47%
	black60: 'rgba(0, 0, 0, 0.6)', // #000000 6%
	black61: 'rgba(0, 0, 0, 0.61)', // #000000 61%
	black62: 'rgba(0, 0, 0, 0.62)', // #000000 62%
	black67: 'rgba(0, 0, 0, 0.67)', // #000000 67%
	black76: 'rgba(0, 0, 0, 0.76)', // #000000 76%
	black77: 'rgba(0, 0, 0, 0.77)', // #000000 77%
	black95: 'rgba(0, 0, 0, 0.95)', // #000000 95%
	black41: 'rgba(0, 0, 0, 0.41)', // #000000 41%
	oxfordblue: '#263238',
	lightgray: 'rgba(0, 0, 0, 0.14)',
	iconBg: 'rgba(83, 148, 163, 0.12)',	
	red: 'rgba(255, 0, 0, 1)', // #FF0000
	red17: 'rgba(255, 46, 0, 0.17)', //#FF2E00 17%
	gray1: 'rgba(217, 217, 217, 1)', //#D9D9D9
	gray2: 'rgba(171, 205, 212, 0.3)', // #ABCDD4 30% | new-request-modal tab-bg
	gray3: 'rgba(141, 191, 203, 1)',
	gray4: 'rgba(217, 237, 255, 0.3)',
	gray5: 'rgba(173, 175, 187, 1)', //#ADAFBB
	gray6: 'rgba(117, 170, 181, 1)', //#75AAB5
	gray33: 'rgba(117, 170, 181, 0.33)', //#75AAB5 33%
	black38_1: 'rgba(38, 50, 56, 1)', //#263238 
	gray92: 'rgba(235, 235, 235, 1)', //#EBEBEB 
	black90: 'rgba(90, 90, 90, 1)', //#5A5A5A 
	blue108: 'rgba(108, 171, 185, 1)',  //#6CABB9
	blue_bright: 'rgb(0, 150, 255)', //#0096FF
	red_dark: 'rgb(139, 0, 0)', //#8B0000
} as const 

export type ColorKeys = keyof typeof Color
export type ColorValues = typeof Color[ColorKeys];