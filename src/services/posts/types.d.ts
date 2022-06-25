import {IFilteredResponse, IPaginationResponse, PostState, PostType} from "../../types";

interface PostsFilteredResponse extends IFilteredResponse{
    data: Post[]
    pagination: IPaginationResponse
}

type PostLastEdit = {
    user: string
    date: string
}

type Post = {
    title: string
    state: PostState
    type: PostType
}

type ReadPostBySlugQParams = {
    slug: string
}

type CreatePostQParams = {
    payload: Post
}

type UpdatePostQParams = {
    slug: string
    payload: Post
}

type DeletePostQParams = {
    slug: string
}