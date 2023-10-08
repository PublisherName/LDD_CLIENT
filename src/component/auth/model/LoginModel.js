
async function LoginModel(credentials) {
    const checkUrl ='http://127.0.0.1:8080/status/'
    const url = 'http://127.0.0.1:8080/auth/login/'
    try {
        const response = await fetch(checkUrl, { method: 'HEAD' });
        if (!response.ok) {
            throw new Error(`Server not reachable: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        throw new Error(`Server not reachable : ${error.message}`);
    }

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
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