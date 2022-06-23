import {backendClient} from "../../utils/httpClient";
import {IFilteredResponse} from "../../types";
import {Post, PostsFilteredResponse, ReadPostByIdQParams} from "./types";

const POSTS_ENDPOINT = '/post'

const readPosts = async (): Promise<PostsFilteredResponse> => {
    const { data } = await backendClient.get(`${POSTS_ENDPOINT}`)
    return data
}

const readPostById = async (id: ReadPostByIdQParams): Promise<Post> => {
    const { data } = await backendClient.get(`${POSTS_ENDPOINT}/${id}`)
    return data
}

export { readPosts, readPostById }