import {handleFilters} from "../../utils/query";
import {backendClient} from "../../utils/httpClient";
import {
    CreateUserQParams,
    DeleteUserQParams, ReadUserByIdQParams,
    ReadUsersFilteredResponse,
    UpdateUserQParams,
    User
} from "./types";

const USER_ENDPOINT = '/user'

const readUsers = async ({filters}: any): Promise<ReadUsersFilteredResponse> => {
    const stringFilters = handleFilters(filters)
    const {data} = await backendClient.get(`${USER_ENDPOINT}${stringFilters}`)
    return data
}

const readUserById = async ({id}: ReadUserByIdQParams): Promise<User> => {
    const {data} = await backendClient.get(`${USER_ENDPOINT}/${id}`)
    return data
}

const createUser = async ({payload}: CreateUserQParams): Promise<User> => {
    const {data} = await backendClient.post(`${USER_ENDPOINT}`, payload)
    return data
}

const updateUser = async ({id, payload}: UpdateUserQParams): Promise<User> => {
    const {data} = await backendClient.put(`${USER_ENDPOINT}/${id}`, payload)
    return data
}

const deleteUser = async ({id}: DeleteUserQParams): Promise<User> => {
    const {data} = await backendClient.delete(`${USER_ENDPOINT}/${id}`)
    return data
}

export {readUsers, readUserById, createUser, updateUser, deleteUser}