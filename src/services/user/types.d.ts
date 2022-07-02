import {IFilteredResponse, IPaginationResponse, UserState} from "../../types";

interface ReadUsersFilteredResponse extends IFilteredResponse{
    data: User[]
    pagination: IPaginationResponse
}

type User = {
    username: string
    email: string
    state: UserState
}

type ReadUserByIdQParams = {
    id: string
}

type CreateUserQParams = {
    payload: User
}

type UpdateUserQParams = {
    id: string
    payload: User
}

type DeleteUserQParams = {
    id: string
}

interface ReadUsersFilters extends DefaultFilters {
    limit?: number
    page?: number
    fields?: any
    sort?: object
}