import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import useReadPostBySlug from "../../services/posts/hooks/useReadPostBySlug";
import PostForm from "./PostForm";
import {PostFormValues} from "./types";
import {FullscreenLoader} from "../../components/Loader";
import useCreatePost from "../../services/posts/hooks/useCreatePost";
import useUpdatePost from "../../services/posts/hooks/useUpdatePost";
import {useReadPostTypes} from "../../services/postType/hooks";
import {PostType} from "../../types";

const PostUpdate = () => {
    const {slug} = useParams()
    const navigate = useNavigate()
    const {data: postData} = useReadPostBySlug(slug)
    const {data: typesData} = useReadPostTypes()
    const onSuccess = () => navigate('/types/post')
    const {mutateAsync: createPost} = useCreatePost({onSuccess})
    const {mutateAsync: updatePost} = useUpdatePost({onSuccess})

    const [loading, setLoading] = React.useState(true)

    const onSubmit = async (values: PostFormValues) => {
        const toSend = {...values}
        toSend.type = typesData?.data ? typesData.data.find((t: PostType) => t.slug === toSend.type) : null

        if (slug) {
            await updatePost({slug, payload: toSend})
        } else {
            await createPost({payload: toSend})
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
    </> : <FullscreenLoader/>

};

export default PostUpdate;