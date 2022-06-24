import {backendClient} from "../../utils/httpClient";
import {IFilteredResponse} from "../../types";
import {Post, PostsFilteredResponse, ReadPostBySlugQParams} from "./types";

const POSTS_ENDPOINT = '/post'

const readPosts = async (): Promise<PostsFilteredResponse> => {
    const { data } = await backendClient.get(`${POSTS_ENDPOINT}`)
    return data
}

const readPostBySlug = async ({slug}: ReadPostBySlugQParams): Promise<Post> => {
    const { data } = await backendClient.get(`${POSTS_ENDPOINT}/${slug}`)
    return data
}

export { readPosts, readPostBySlug }