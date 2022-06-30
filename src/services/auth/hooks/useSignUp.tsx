import React from 'react';
import {useMutation, useQueryClient} from "react-query";
import {signUp} from "../api";
import {toast} from "react-toastify";
import {HookQueryOptions} from "../../../types";

const UseSignIn = ({ onSuccess = () => {} }: HookQueryOptions) => {
    const queryClient = useQueryClient()
    return useMutation(signUp,{
        onSuccess: () => {
            toast.success('Registered successfully.')
            queryClient.invalidateQueries('readUsers')
            onSuccess()
        },
        onError: () => {
            toast.error('Error: something went wrong.')
        }
    })
}

export default UseSignIn;