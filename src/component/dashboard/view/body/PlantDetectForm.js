import React, { useState } from 'react'
import Cookies from 'universal-cookie';

import './PlantDetectForm.css'

function PlantDetectForm() {

    const cookies = new Cookies();
    let token = cookies.get('token');

    const [disease, setDisease] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    function handleImageSelect(event) {
        setDisease('');
        setError('');

        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = function () {
            document.getElementById('image-upload').src = reader.result;
        }

        if (file) {
            reader.readAsDataURL(file);
            const formData = new FormData();
            formData.append('image', file);

            setIsLoading(true);
            fetch('http://smartkrishi.me/plant-disease-detection/', {
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': 'Token ' + token
                }

            })
                .then(response => response.json())
                .then(data => {
                    const diseaseName = data.predictions && data.predictions[0] ? data.predictions[0].class : "No disease detected";
                    setDisease(diseaseName);
                    setIsLoading(false);
                })
                .catch(error => {
                    setIsLoading(false);
                    setError('Unable to communicate with the server. Please try again later.');
                });
        } else {
            document.getElementById('image-upload').src = "image_select.png";
        }
    }

    let content;

    if (error) {
        content = (
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> {error}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    } else if (isLoading) {
        content = <div className="spinner-border" role="status"></div>;
    } else {
        content = (
            <h3 style={{ fontWeight: 'bold', color: '#2c3e50' }}>
                {disease ? disease : "No disease detected"}
            </h3>
        );
    }

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>

                <a href="/leaf.jpg" download className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <i className="fas fa-download fa-sm text-white-50"></i> Download sample
                </a>
            </div>

            <div className="row">

                <div className="col-xl-8 col-lg-9">
                    <div className="card shadow mb-4">
                        <div
                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Leaf Disease Detection</h6>

                        </div>
                        <div className="card-body d-flex align-items-center justify-content-center flex-column">
                            <div className="image-upload-container" style={{ width: '200px', height: '200px', border: '1px solid black', marginBottom: '10px' }}>
                                <img id="image-upload" src="image_select.png" alt="" style={{ width: '100%', height: '100%' }} />
                            </div>
                            <label htmlFor="image-selector" className="custom-file-upload">
                                Select Image
                            </label>
                            <input type="file" id="image-selector" accept="image/*" onChange={handleImageSelect} style={{ display: 'none' }} />
                        </div>

                    </div>
                </div>

                <div className="col-xl-4 col-lg-3">
                    <div className="card shadow mb-4" style={{ height: '350px' }}>
                        <div
                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Result</h6>

                        </div>
                        <div className="card-body d-flex align-items-center justify-content-center flex-column">
                            {content}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PlantDetectForm