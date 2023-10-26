import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import SignupForm from '../view/SignupForm';
import SignupModel from '../model/SignupModel';

function SignupController() {

  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirm: ''
  });

  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  function validateForm() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(formData.email) > 0 && formData.password.length > 0 && formData.password_confirm.length > 0 && formData.password === formData.password_confirm && formData.username.length > 0 && formData.first_name.length > 0 && formData.last_name.length > 0;
  }

  const handleSubmit = async e => {
    setIsLoading(true)
    try{
      e.preventDefault();
      const API_RESPONSE = await SignupModel(formData);
      if (API_RESPONSE.hasOwnProperty('id'))
      {
        setShowAlert(true);
        setErrorMessage(null)
        navigate('/login');

      }
    }catch(error){
      setIsLoading(false);
      setShowAlert(true);
      setErrorMessage(error.message);
    }
  }

  return (
    <>
      <SignupForm
        formData={formData}
        handleInputChange={handleInputChange}
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

export default SignupController