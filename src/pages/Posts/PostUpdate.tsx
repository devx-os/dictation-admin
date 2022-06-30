import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import useReadPostBySlug from "../../services/posts/hooks/useReadPostBySlug";
import PostForm from "./PostForm";
import {PostFormValues} from "./types";
import useCreatePost from "../../services/posts/hooks/useCreatePost";
import useUpdatePost from "../../services/posts/hooks/useUpdatePost";
import {useReadPostTypes} from "../../services/postType/hooks";
import {PostType, ROUTE} from "../../types";
import {useGlobalLoader} from "../../hooks";
import {PageHeader} from "../../components/PageHeader";

const PostUpdate = () => {
    const {slug} = useParams()
    const navigate = useNavigate()
    const {data: postData} = useReadPostBySlug(slug)
    const {data: typesData} = useReadPostTypes()
    const onSuccess = () => navigate(ROUTE.TYPE_POST)
    const {mutateAsync: createPost} = useCreatePost({onSuccess})
    const {mutateAsync: updatePost} = useUpdatePost({onSuccess})

    const [loading, setLoading] = React.useState(true)
    const {start, stop} = useGlobalLoader()
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
        start()
        if (!slug) {
            stop()
            setLoading(false)
        } else {
            if (postData) {
                stop()
                setLoading(false)
            }
        }
    }, [slug, postData])

    return <>
        <PageHeader>
            <PageHeader.Title>{`${slug ? 'Update post' : 'Create post'}`}</PageHeader.Title>
        </PageHeader>
        {!loading && <PostForm onSubmit={onSubmit} initialValues={postData}/>}
    </>

};

export default PostUpdate;