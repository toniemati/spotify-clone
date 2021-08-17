import { useEffect } from 'react';
import './App.css';
import Login from './components/Login/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player/Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    const { access_token } = hash;
    
    if (!access_token) return;
    window.history.pushState({}, null, '/');

    dispatch({ type: 'SET_TOKEN', payload: access_token });
    spotify.setAccessToken(access_token);

    spotify.getMe()
      .then((data) => {
        dispatch({ type: 'SET_USER', payload: data });
      });

    spotify.getUserPlaylists()
      .then((data) => {
        dispatch({ type: 'SET_PLAYLISTS', payload: data });
      });

  }, [dispatch]);

  return (
    <div className="app">
      {
        token
          ? <Player spotify={spotify} />
          : <Login />
      }
    </div>
  );
}

export default App;
