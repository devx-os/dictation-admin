import * as React from 'react';
import {useParams} from "react-router-dom";
import useReadPostBySlug from "../../services/posts/hooks/useReadPostBySlug";

const EditPost = () => {
    const {slug} = useParams()
    const {data: postData} = useReadPostBySlug(slug)
    return (
        <div>
            <p>{`Titolo: ${postData?.title}`}</p>
        </div>
    );
};

export default EditPost;