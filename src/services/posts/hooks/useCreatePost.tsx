import React from 'react';
import {useMutation, useQueryClient} from "react-query";
import {createPost} from "../api";
import {toast} from "react-toastify";
import {HookQueryOptions} from "../../../types";

const UseCreatePost = ({ onSuccess = () => {} }: HookQueryOptions) => {
    const queryClient = useQueryClient()
    return useMutation(createPost, {
        onSuccess: () => {
            toast.success('Post successfully created.')
            queryClient.invalidateQueries('readPosts')
            onSuccess()
        },
        onError: () => {
            toast.error('Error: Post not created.')
        }
    })
}

export default UseCreatePost