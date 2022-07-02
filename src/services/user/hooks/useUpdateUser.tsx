import React from 'react';
import {useMutation, useQueryClient} from "react-query";
import {toast} from "react-toastify";
import {HookQueryOptions} from "../../../types";
import {updateUser} from "../api";

const UseUpdateUser = ({onSuccess = () => {}}: HookQueryOptions) => {
    const queryClient = useQueryClient()
    return useMutation(updateUser, {
        onSuccess: async () => {
            toast.success('User successfully updated.')
            await queryClient.invalidateQueries('readUsers')
            onSuccess()
        },
        onError: () => {
            toast.error('Error: User not updated.')
        }
    })
}

export default UseUpdateUser