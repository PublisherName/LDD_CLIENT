const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

async function API_STATUS_CHECK() {
    const checkUrl = `${API_BASE_URL}/status/`
    try {
        const response = await fetch(checkUrl, { method: 'HEAD' });
        if (!response.ok) {
            throw new Error(`Server not reachable: ${response.status} ${response.statusText}.`);
        }
    } catch (error) {
        throw new Error(`Server not reachable : ${error.message}.`);
    }
}

async function API_CALL(CALL_URL,credentials) {
    const url = `${API_BASE_URL}${CALL_URL}`
    API_STATUS_CHECK();

    return await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
}



export default API_CALL