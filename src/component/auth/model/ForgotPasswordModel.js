import API_CALL from "../../apiReader";

async function ForgotPasswordModel(FormData) {
    const FORGOT_PASSWORD_URL = '/forgot-password/'
    return API_CALL(FORGOT_PASSWORD_URL, FormData)
        .then(response => response.json())
        .then(data => {
            if (data.hasOwnProperty('status')) {
                return data;
            }else{
                if (data.hasOwnProperty('non_field_errors')){
                    throw new Error(`${data.non_field_errors}`)
                }
                throw new Error("Password Reset Failed.")
            }
        })
        .catch(error => {
            throw new Error(`${error.message}`)
        });
}

export default ForgotPasswordModel