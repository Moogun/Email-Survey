const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return action.payload || false
    case 'ADD_CREDIT':
      return action.payload
    default:
      return state
  }
}

export default authReducer
