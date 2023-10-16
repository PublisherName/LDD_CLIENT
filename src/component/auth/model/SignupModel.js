import API_CALL from "../../apiReader";

async function SignupModel(FormData) {
    const REGISTER_URL = '/auth/register/'
    return API_CALL(REGISTER_URL, FormData)
        .then(response => response.json())
        .then(data => {
            if (data.hasOwnProperty('id')) {
                return data;
            }else{
                if (data.hasOwnProperty('username')){
                    throw new Error(`${data.username}`)
                }else if (data.hasOwnProperty('email')){
                    throw new Error(`${data.email}`)
                }else if (data.hasOwnProperty('password')){
                    throw new Error(`${data.password}`)
                }else if (data.hasOwnProperty('password_confirm')){
                    throw new Error(`${data.password_confirm}`)
                }else if (data.hasOwnProperty('first_name')){
                    throw new Error(`${data.first_name}`)
                }else if (data.hasOwnProperty('last_name')){
                    throw new Error(`${data.last_name}`)
                }
                throw new Error("Sinn Up failed.")
            }
        })
        .catch(error => {
            throw new Error(`${error.message}`)
        });
}

export default SignupModel