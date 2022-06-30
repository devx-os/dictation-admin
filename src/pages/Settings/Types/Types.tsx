import React from 'react';
import {useReadPostTypes} from "../../../services/postType/hooks";
import TypesForm from "./TypesForm";
import TypesTable from "./TypesTable";
import {PageHeader} from "../../../components/PageHeader";

const Types = () => {
    const {data: typesData} = useReadPostTypes()

    const onSubmit = (values: any) => {
        console.log('values', values)
    }

    return (
        <>
            <PageHeader>
                <PageHeader.Title>{`Types`}</PageHeader.Title>
            </PageHeader>
            <div className='flex flex-row space-x-16 child:basis-1/2'>
                <TypesForm initialValues={{types: typesData?.data}} onSubmit={onSubmit}/>
                <TypesTable/>
            </div>
        </>
    );
};

export default Types;