import React from 'react';
import {TableBasic} from "../../../components/Table";
import {Modal} from "../../../components/Modal";
import {useReadPostTypes} from "../../../services/postType/hooks";
import {useTable} from "react-table";
import {useDialog} from "../../../hooks/useDialog";

const TypesTable = () => {
    const { data: typesData } = useReadPostTypes()

    const deleteDialog = useDialog('delete-type-modal')

    const columns: any = React.useMemo(() => [
        {
            Header: 'Title',
            accessor: 'title'
        },
        {
            Header: 'Slug',
            accessor: 'slug',
        }
    ], [])

    const tableData = React.useMemo(() => typesData?.data || [], [typesData?.data])

    const tableInstance = useTable({
        columns,
        data: tableData
    })

    return <>
        <TableBasic tableInstance={tableInstance} className='table-compact'/>
        <Modal id='delete-type-modal' dialogOptions={deleteDialog}>
            <p>Sei sicuro?</p>
        </Modal>
    </>
};

export default TypesTable;