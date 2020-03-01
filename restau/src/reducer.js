const initialState = {uName: '', uCity: ''};

const reducer = (state=initialState, action) => {
	switch(action.type){
		case 'NAME_CHANGE':
			return Object.assign({}, state, {uName: action.newName});
		case 'CITY_CHANGE':
			return Object.assign({}, state, {uCity: action.newCity});
		default:
  		return state;
	}
}

export default reducer;