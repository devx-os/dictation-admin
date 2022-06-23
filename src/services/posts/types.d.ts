import {IFilteredResponse, IPaginationResponse} from "../../types";

interface PostsFilteredResponse extends IFilteredResponse{
    data: Post[]
    pagination: IPaginationResponse
}

type Post = {
    title: string
    author: string
}

type ReadPostByIdQParams = ID
