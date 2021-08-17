export const initialState = {
  //! For debugging
  // token: 'BQAt5BlMuRTjFAdJR5ZjDDNBkyLNuH58fOfsQsFPTrl3imR3WM…e_xsfwU3uwDvkvpFVKGJ5vIbkeGacltbjTp0Xi0RRjd_-gerA',
  token: '',
  user: null,
  playlists: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  console.log('💩', action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload
      }
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.payload
      }
    default:
      return state
  }
};

export default reducer;