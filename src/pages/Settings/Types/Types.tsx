import React from 'react';
import {useReadPostTypes} from "../../../services/postType/hooks";
import TypesForm from "./TypesForm";
import TypesTable from "./TypesTable";

const Types = () => {
    const {data: typesData} = useReadPostTypes()

    const onSubmit = (values: any) => {
        console.log('values', values)
    }

    return (
        <>
            <div className='flex w-max items-center space-x-2'>
                <h2 className='text-xl'>Types</h2>
            </div>
            <div className='flex flex-row space-x-16 child:basis-1/2'>
                <TypesForm initialValues={{types: typesData?.data}} onSubmit={onSubmit}/>
                <TypesTable/>
            </div>
        </>
    );
};

export default Types;