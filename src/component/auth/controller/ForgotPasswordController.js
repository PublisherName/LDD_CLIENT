import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import ForgotPasswordForm from '../view/ForgotPasswordForm';
import ForgotPasswordModel from '../model/ForgotPasswordModel';

function ForgotPasswordController() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function validateForm() {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email) && email.length > 0;
    }

    const handleSubmit = async e => {
        setIsLoading(true);
        e.preventDefault();
        try{
            const response = await ForgotPasswordModel({
                "email": email
            });
            if (response.hasOwnProperty('status')) {
                navigate('/login',{ state: { showAlert: true, errorMessage:"Password reset link sent to your email."} });

            } else {
                setShowAlert(true);
                setErrorMessage("Password reset failed.");
            }
        }catch(error){
            setIsLoading(false);
            setShowAlert(true);
            setErrorMessage(error.message);
        }
    }

    return (
        <>
            <ForgotPasswordForm
                email={email}
                setEmail={setEmail}
                showAlert={showAlert}
                setShowAlert={setShowAlert}
                errorMessage={errorMessage}
                validateForm={validateForm}
                handleSubmit={handleSubmit}
                isLoading={isLoading}
            />
        </>
    )

}

export default ForgotPasswordController