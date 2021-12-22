const initialState = {
  authChecked: false,
  loggedIn: false,
  currentUser: {}
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATED':
      return {
        authChecked: true,
        loggedIn: true,
        currentUser: action.payload,
      };
    case 'UNAUTHENTICATED':
      return {
        authChecked: true,
        loggedIn: false,
        currentUser: {}
      };
    default:
      return state;
  }
}

export default auth;
