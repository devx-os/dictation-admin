import React from 'react';
import {useReadPosts} from "../../services/posts/hooks";
import {useTable} from "react-table";
import {TableBasic} from "../../components/Table";


const PostsTable = () => {
    const {data: postsData} = useReadPosts()

    const columns: any = React.useMemo(() => [
        {
            Header: 'Title',
            accessor: 'title'
        }
    ], [])

    const tableInstance = useTable({
        columns,
        data: postsData?.data || [],
    })

    return <TableBasic tableInstance={tableInstance}/>
}

export default PostsTable
