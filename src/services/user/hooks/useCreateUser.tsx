import React from 'react';
import {useMutation, useQueryClient} from "react-query";
import {toast} from "react-toastify";
import {HookQueryOptions} from "../../../types";
import {createUser} from "../api";

const UseCreateUser = ({ onSuccess = () => {} }: HookQueryOptions) => {
    const queryClient = useQueryClient()
    return useMutation(createUser, {
        onSuccess: async () => {
            toast.success('User successfully created.')
            await queryClient.invalidateQueries('readUsers')
            onSuccess()
        },
        onError: () => {
            toast.error('Error: User not created.')
        }
    })
}

export default UseCreateUser