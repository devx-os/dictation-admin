import * as React from 'react';
import {CgMathPlus} from "react-icons/cg";
import {useNavigate} from "react-router-dom";
import PagesTable from "./PagesTable";

const Posts = () => {
    const navigate = useNavigate()

    return (<>
            <div className='flex w-max items-center space-x-2'>
                <h2 className='text-xl'>Pages</h2>
                <button className='btn btn-outline btn-xs' onClick={() => navigate('/types/post/create-post')}>
                    <CgMathPlus/> Add page
                </button>
            </div>
            <PagesTable />
        </>
    );
};

export default Posts;