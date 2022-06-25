import * as React from 'react';
import PostsTable from "./PostsTable";
import {CgMathPlus} from "react-icons/cg";
import {useNavigate} from "react-router-dom";

const Posts = () => {
    const navigate = useNavigate()

    return (<>
            <div className='flex w-max items-center space-x-2'>
                <h2 className='text-xl'>Posts</h2>
                <button className='btn btn-outline btn-xs' onClick={() => navigate('/posts/create-post')}>
                    <CgMathPlus/> Add post
                </button>
            </div>
            <PostsTable/>
        </>
    );
};

export default Posts;