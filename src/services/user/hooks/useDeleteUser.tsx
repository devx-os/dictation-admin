import * as React from 'react';
import {useMutation, useQueryClient} from "react-query";
import {toast} from "react-toastify";
import {HookQueryOptions} from "../../../types";
import {deleteUser} from "../api";

const useDeleteUser = ({ onSuccess = () => {}}: HookQueryOptions) => {
    const queryClient = useQueryClient()
    return useMutation(deleteUser, {
        onSuccess: async () => {
            toast.success('User successfully deleted.')
            await queryClient.invalidateQueries('readUsers')
            onSuccess()
        },
        onError: () => {
            toast.error('Error: User not deleted.')
        }
    })
}

export default useDeleteUser;