const auth = ( state = { authChecked: false, user: null }, action ) => {
    switch ( action.type ) {
      case 'AUTHENTICATED':
        return { authChecked: true, user: action.payload }
  
      case 'AUTHENTICATION_CHECKED':
        return { authChecked: true, user: null }
  
      default:
        return state
    }
}

export default auth;
