import * as React from 'react';
import PostsTable from "./PostsTable";
import {RiArticleLine} from "react-icons/ri";
import {CgMathPlus} from "react-icons/cg";
import {useNavigate} from "react-router-dom";
import {PageHeader} from "../../components/PageHeader";
import {ROUTE} from "../../types";

const Posts = () => {
    const navigate = useNavigate()

    return (<>
            <PageHeader>
                {<PageHeader.Icon><RiArticleLine /></PageHeader.Icon>}
                <PageHeader.Title>{`Posts`}</PageHeader.Title>
                <PageHeader.Left>
                    <button className='btn btn-accent hover:bg-transparent hover:text-accent btn-xs w-max' onClick={() => navigate(ROUTE.TYPE_POST_CREATE)}>
                        <CgMathPlus/> Create post
                    </button>
                </PageHeader.Left>
            </PageHeader>
            <PostsTable/>
        </>
    );
};

export default Posts;