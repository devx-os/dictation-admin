import React from 'react';
import {useMutation, useQueryClient} from "react-query";
import {updatePost} from "../api";
import {toast} from "react-toastify";
import {HookQueryOptions} from "../../../types";

const UseUpdatePost = ({onSuccess = () => {}}: HookQueryOptions) => {
    const queryClient = useQueryClient()
    return useMutation(updatePost, {
        onSuccess: async () => {
            toast.success('Post successfully updated.')
            await queryClient.invalidateQueries('readPosts')
            onSuccess()
        },
        onError: () => {
            toast.error('Error: Post not updated.')
        }
    })
}

export default UseUpdatePost