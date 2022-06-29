import * as React from 'react';
import {useMutation, useQueryClient} from "react-query";
import {deletePost} from "../api";
import {toast} from "react-toastify";
import {HookQueryOptions} from "../../../types";

const useDeletePost = ({ onSuccess = () => {}}: HookQueryOptions) => {
    const queryClient = useQueryClient()
    return useMutation(deletePost, {
        onSuccess: async () => {
            toast.success('Post successfully deleted.')
            await queryClient.invalidateQueries('readPosts')
            onSuccess()
        },
        onError: () => {
            toast.error('Error: Post not deleted.')
        }
    })
}

export default useDeletePost;