import {backendClient} from "../../utils/httpClient";

import {
    CreatePostQParams,
    DeletePostQParams,
    Post,
    PostsFilteredResponse,
    ReadPostBySlugQParams,
    UpdatePostQParams
} from "./types";

const POSTS_ENDPOINT = '/post'

const readPosts = async (): Promise<PostsFilteredResponse> => {
    const { data } = await backendClient.get(`${POSTS_ENDPOINT}`)
    return data
}

const readPostBySlug = async ({slug}: ReadPostBySlugQParams): Promise<Post> => {
    const { data } = await backendClient.get(`${POSTS_ENDPOINT}/${slug}`)
    return data
}

const createPost = async ({payload}: CreatePostQParams): Promise<Post> => {
    const { data } = await backendClient.post(`${POSTS_ENDPOINT}`, payload)
    return data
}

const updatePost = async ({slug, payload}: UpdatePostQParams): Promise<Post> => {
    const { data } = await backendClient.put(`${POSTS_ENDPOINT}/${slug}`, payload)
    return data
}

const deletePost = async ({slug}: DeletePostQParams): Promise<Post> => {
    const { data } = await backendClient.delete(`${POSTS_ENDPOINT}/${slug}`)
    return data
}

export { readPosts, readPostBySlug, createPost, updatePost, deletePost }