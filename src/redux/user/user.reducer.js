const INITIAL_STATE = {
  currentUser: null,
}
//default parameter value below is available in es6
const userReducer = ( state = INITIAL_STATE, action ) => {
  switch(action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      }; 

    default: 
      return state;
  }
}

export default userReducer;