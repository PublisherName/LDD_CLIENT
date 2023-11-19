import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import ActivateAccountView from '../view/ActivateAccountView';

const API_BASE_URL = process.env.REACT_APP_API_IS_DEV === 'true' ? process.env.REACT_APP_API_BASE_URL_DEV : process.env.REACT_APP_API_BASE_URL_PROD;

function ActivateAccountController() {
    let { email, code } = useParams();
    const [errorMessage, setErrorMessage] = useState(null);
    const [sucessMessage, setSucessMessage] = useState(null);

    useEffect(() => {
        fetch(`${API_BASE_URL}/activate/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, token: code }),
        })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(data => {
                        if (data.non_field_errors) {
                            setErrorMessage(data.non_field_errors ? data.non_field_errors[0] : 'Something went wrong');
                        } else if (data.token || data.email) {
                            setErrorMessage('Email and code are required to activate account.');
                        }
                    });
                } else if (response.ok) {
                    setSucessMessage('Account activated successfully.');
                }
                return response.json();
            })
            .catch(error => setErrorMessage(error.message));
    }, [email, code]);

    return (
        <ActivateAccountView errorMessage={errorMessage} sucessMessage={sucessMessage} />
    )
}

export default ActivateAccountController