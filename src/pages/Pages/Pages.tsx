import * as React from 'react';
import {CgMathPlus} from "react-icons/cg";
import {useNavigate} from "react-router-dom";
import PagesTable from "./PagesTable";
import {PageHeader} from "../../components/PageHeader";
import {ROUTE} from "../../types";

const Posts = () => {
    const navigate = useNavigate()

    return (<>
            <PageHeader>
                <PageHeader.Title>{`Pages`}</PageHeader.Title>
                <PageHeader.Left>
                    <button className='btn btn-outline btn-xs' onClick={() => navigate(ROUTE.TYPE_PAGE_CREATE)}>
                        <CgMathPlus/> Create page
                    </button>
                </PageHeader.Left>
            </PageHeader>
            <PagesTable />
        </>
    );
};

export default Posts;