export const setToken = ( token ) => localStorage.setItem( 'token', token )

export const deleteToken = () => localStorage.removeItem( 'token' )

export const URL = 'http://localhost:3000'

export const fetcher = ( endpoint, method, body ) => {
  if ( typeof method !== 'string' || ![ 'get', 'post', 'put', 'patch', 'delete' ].includes( method.toLowerCase() ) ) {
    throw new TypeError( 'Invalid request method' )
  }
  return fetch( endpoint ? `${ URL }${ endpoint }` : URL,
    body ? { method: method, headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(body) }
      : { method: method, headers: { Accept: 'application/json' } } )
}

export const loginUser = ( credentials ) => ( dispatch ) => fetcher( '/login', 'post', credentials )
  .then( response => response.json() )
  .then( data => {
    setToken( data.token )
    return data
  } )
  .then( data => dispatch( { type: 'AUTHENTICATED', payload: data } ) )

export const signupUser = ( credentials ) => ( dispatch ) => fetcher( '/users', 'post', credentials )
  .then( response => response.json() )
  .then( data => {
    setToken( data.token )
    return data
  } )
  .then( data => dispatch( { type: 'AUTHENTICATED', payload: data } ) )

export const logoutUser = ( credentials ) => ( dispatch ) => { 
  deleteToken() 
  dispatch( { type: 'UNAUTHENTICATED'} )
}   

export const checkAuth = () => {
  return (dispatch) => {
    return fetch("http://localhost:3000/current_user", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: setToken()
      }
    }).then((res) => {
      if (res.ok) {
        return res
        .json()
        .then(user => {         
        user.data ? dispatch({type: 'AUTHENTICATED', payload: user}) : dispatch({type: 'UNAUTHENTICATED'})})
      } else {
        return Promise.reject(dispatch({type: 'UNAUTHENTICATED'})) 
      }
   });
 };
};
