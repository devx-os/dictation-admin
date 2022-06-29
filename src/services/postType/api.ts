import {backendClient} from "../../utils/httpClient";

const POST_TYPE_ENDPOINT = '/post-type'

const readPostTypes = async () => {
    const {data} = await backendClient.get(`${POST_TYPE_ENDPOINT}`)
    return data
}

export { readPostTypes }
