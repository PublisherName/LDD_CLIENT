import API_CALL from "../../apiReader";

async function SignupModel(FormData) {
    const REGISTER_URL = '/register/'
    return API_CALL(REGISTER_URL, FormData)
        .then(response => response.json())
        .then(data => {
            if (data.hasOwnProperty('status')) {
                return data;
            }else{
                if (data.hasOwnProperty('non_field_errors')){
                    throw new Error(`${data.non_field_errors}`)
                }
                throw new Error("Signup failed.")
            }
        })
        .catch(error => {
            throw new Error(`${error.message}`)
        });
}

export default SignupModel