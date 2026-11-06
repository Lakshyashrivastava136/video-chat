import React, { useState } from 'react';
import { connect } from 'react-redux';
import logo from '../resources/logo.png';
import UsernameInput from './components/Usernameinput';
import SubmitButton from './components/SubmitButton';
import { useHistory } from 'react-router-dom';
import { registerNewUser }  from '../utils/wssConnection/wssConnection';
import { setUsername } from '../store/actions/dashboardActions';

import './LoginPage.css';

const LoginPage = ({ saveUsername }) => {
  const [username, setUsername] = useState('');

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = username.trim();
    if (!name) {
      return;
    }
    registerNewUser(name);
    saveUsername(name);
    history.push('/dashboard');
  };

  return (
    <div className='login-page_container'>
      <form className='login-page_login_box' onSubmit={handleSubmit}>
        <img className='login-page_logo_image' src={logo} alt='Video Chat' />
        <h1 className='login-page_title'>Video Chat</h1>
        <p className='login-page_subtitle'>
          Choose a name so people can find and call you.
        </p>
        <UsernameInput username={username} setUsername={setUsername} />
        <SubmitButton disabled={!username.trim()} />
      </form>
      <footer> <small>&#9400; Copyright 2021, shubham khatal</small> </footer>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    saveUsername: username => dispatch(setUsername(username))
  };
};

export default connect(null, mapActionsToProps)(LoginPage);
