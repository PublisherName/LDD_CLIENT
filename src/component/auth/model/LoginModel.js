import API_CALL from "../../apiReader";

async function LoginModel(credentials) {
    const LOGIN_URL = '/auth/login/'
    return API_CALL(LOGIN_URL, credentials)
        .then(response => response.json())
        .then(data => {
            if (data.detail === "Login successful") {
                return data.token;
            } else {
                throw new Error(`${data.detail}`)
            }
        })
        .catch(error => {
            throw new Error(`${error.message}`)
        });
}

export default LoginModel