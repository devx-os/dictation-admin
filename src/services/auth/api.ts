import {backendClient} from "../../utils/httpClient";

const login = async (credentials: LoginRequestBody)  => {
    const {data} = await backendClient.post(`/login`, credentials)
    return data
}

export { login }