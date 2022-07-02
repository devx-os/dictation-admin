import React from 'react';
import {useNavigate} from "react-router-dom";
import {PageHeader} from "../../../components/PageHeader";
import {RiArticleLine} from "react-icons/ri";
import {ROUTE} from "../../../types";
import {CgMathPlus} from "react-icons/cg";
import UsersTable from "./UsersTable";

const Users = () => {
    const navigate = useNavigate()

    return (<>
            <PageHeader>
                {<PageHeader.Icon><RiArticleLine /></PageHeader.Icon>}
                <PageHeader.Title>{`Users`}</PageHeader.Title>
                <PageHeader.Left>
                    <button className='btn btn-accent hover:bg-transparent hover:text-accent btn-xs w-max' onClick={() => navigate(ROUTE.TYPE_POST_CREATE)}>
                        <CgMathPlus/> Create user
                    </button>
                </PageHeader.Left>
            </PageHeader>
            <UsersTable/>
        </>
    );
};

export default Users;