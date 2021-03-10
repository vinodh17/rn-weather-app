
const initialState = {
country: {},
weaher: {}
}

export default (state = initialState, action: any) => {
switch(action.type) {

	case 'GET_COUNTRY': 
	return {...state, country: action.payload}
	break;

	case 'GET_WEATHER': 
	return {...state, weather: action.payload}
	break;

	default: return state;
	break;

}
}