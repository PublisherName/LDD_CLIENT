import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';


import LoginForm from '../view/LoginForm';
import LoginModel from '../model/LoginModel';

function LoginController({ setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const location = useLocation();
    const [showAlert, setShowAlert] = useState(location.state?.showAlert || false);
    const [errorMessage, setErrorMessage] = useState(location.state?.errorMessage || "");
    const [isLoading, setIsLoading] = useState(false);

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    const handleSubmit = async e => {
        setIsLoading(true);
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
                setIsLoading(false);
                setShowAlert(true);
                setErrorMessage("Login failed");
            }
        }catch(error){
            setIsLoading(false);
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
            isLoading={isLoading}
         />
    )
}

export default LoginController

LoginController.propTypes = {
    setToken: PropTypes.func.isRequired
  };