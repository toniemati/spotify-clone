import React from 'react'
import './Login.css';
import { loginUrl } from '../../spotify';

const Login = () => {
  return (
    <div className="login">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png" alt="spotify-logo" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a> 
    </div>
  )
}

export default Login
