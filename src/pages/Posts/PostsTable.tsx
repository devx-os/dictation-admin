import React from 'react';
import {useReadPosts} from "../../services/posts/hooks";
import {CellProps, useTable} from "react-table";
import {TableBasic} from "../../components/Table";
import EditStateCell from "../../components/Cell/EditStateCell";
import {Post} from "../../services/posts/types";
import {Checkbox} from "../../components/Form";


const PostsTable = () => {
    const {data: postsData} = useReadPosts()

    const onEditState = () => {

    }

    const columns: any = React.useMemo(() => [
        {
            Header: '',
            accessor: '_id',
            Cell: ({row, value}: CellProps<Post>) => <Checkbox checked={false} />
        },
        {
            Header: 'Title',
            accessor: 'title'
        },
        {
            Header: 'Type',
            accessor: 'type'
        },
        {
            Header: 'State',
            accessor: 'state',
            Cell: ({row, value}: CellProps<Post>) => <EditStateCell onEditState={onEditState} value={value}/>
        }
    ], [])

    const tableInstance = useTable({
        columns,
        data: postsData?.data || [],
    })

    return <TableBasic tableInstance={tableInstance}/>
}

export default PostsTable
