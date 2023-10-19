import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types';

import LoginForm from '../view/LoginForm';
import LoginModel from '../model/LoginModel';

function LoginController({ setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try{
            const token = await LoginModel({
                "login": username,
                password: password
            });
            if (token) {
                setToken(token);
                setShowAlert(true);

            } else {
                setShowAlert(true);
                setErrorMessage("Login failed");
            }
        }catch(error){
            setShowAlert(true);
            setErrorMessage(error.message);
        }
    }

    return (
        <LoginForm 
            showAlert={showAlert} 
            setShowAlert={setShowAlert} 
            errorMessage={errorMessage}
            setPassword={setPassword}
            password={password}
            setUsername={setUsername}
            username={username}
            validateForm = {validateForm}
            handleSubmit = {handleSubmit}
         />
    )
}

export default LoginController

LoginController.propTypes = {
    setToken: PropTypes.func.isRequired
  };