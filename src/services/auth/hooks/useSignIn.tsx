import React from 'react';
import {useMutation} from "react-query";
import {signIn} from "../api";
import {toast} from "react-toastify";
import {HookQueryOptions, ROUTE} from "../../../types";
import {useNavigate} from "react-router-dom";

const UseSignIn = ({ onSuccess = () => {} }: HookQueryOptions) => {
    const navigate = useNavigate()
    return useMutation(signIn,{
        onSuccess: async (data) => {
            const {token = '', refreshToken = ''} = data
            localStorage.setItem('access_token', token)
            localStorage.setItem('refresh_token', refreshToken)
            onSuccess()
            navigate(ROUTE.DASHBOARD)
        },
        onError: () => {
            toast.error('Error: something went wrong.')
        }
    })
}

export default UseSignIn;