import React from 'react';
import {useParams} from "react-router-dom";
import useReadPostBySlug from "../../services/posts/hooks/useReadPostBySlug";
import PostForm from "./PostForm";
import {PostFormValues} from "./types";
import {FullscreenLoader} from "../../components/Loader";
import useCreatePost from "../../services/posts/hooks/useCreatePost";
import useUpdatePost from "../../services/posts/hooks/useUpdatePost";

const PostUpdate = () => {
    const {slug} = useParams()
    const {data: postData} = useReadPostBySlug(slug)
    const {mutateAsync: createPost} = useCreatePost()
    const {mutateAsync: updatePost} = useUpdatePost()

    const [loading, setLoading] = React.useState(true)

    const onSubmit = async (values: PostFormValues) => {
        if (slug) {
            await updatePost({slug, payload: values})
        } else {
            await createPost({payload: values})
        }
    }

    React.useEffect(() => {
        if (!slug) {
            setLoading(false)
        } else {
            if (postData) setLoading(false)
        }
    }, [slug, postData])

    return !loading ? <>
        <div className='flex w-max items-center space-x-2'>
            <h1 className='text-2xl'>{slug ? 'Update post' : 'Create post'}</h1>
        </div>
        <PostForm onSubmit={onSubmit} initialValues={postData}/>
    </> : <FullscreenLoader />

};

export default PostUpdate;