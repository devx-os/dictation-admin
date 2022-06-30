import {backendClient} from "../../utils/httpClient";

const readUserInfo = async () => {
    const {data} = await backendClient.get(`user-info`)
    return data
}

const signIn = async (credentials: SignInRequestBody)  => {
    const {data} = await backendClient.post(`/sign-in`, credentials)
    return data
}

const signUp = async (body: SignUpRequestBody)  => {
    const {data} = await backendClient.post(`/create-user`, body)
    return data
}

export { readUserInfo, signIn, signUp }