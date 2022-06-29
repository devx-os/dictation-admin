import React from 'react';
import {useDeletePost, useReadPosts} from "../../services/posts/hooks";
import {CellProps, useRowSelect, useTable} from "react-table";
import {TableBasic} from "../../components/Table";
import {Post} from "../../services/posts/types";
import {CgMoreVerticalAlt, CgTrash} from "react-icons/cg"
import {RiPencilRuler2Line} from "react-icons/ri";
import {Modal} from "../../components/Modal";
import {useDialog} from "../../hooks/useDialog";
import {useNavigate} from "react-router-dom";
import {padNumber} from "../../utils/number";
import useServerSidePagination from "../../hooks/useServerSidePagination/useServerSidePagination";
import PaginationBar from "../../components/PaginationBar/PaginationBar";

const IndeterminateCheckbox = React.forwardRef(
    ({indeterminate, ...rest}: any, ref) => {
        const defaultRef = React.useRef()
        const resolvedRef: any = ref || defaultRef

        React.useEffect(() => {
            if (resolvedRef && resolvedRef.current) resolvedRef.current.indeterminate = indeterminate
        }, [resolvedRef, indeterminate])

        return <input type="checkbox" className="checkbox checkbox-primary" ref={resolvedRef} {...rest} />
    }
)

const PostsTable = () => {
    const paginationProps = useServerSidePagination()
    const {data: postsData} = useReadPosts({type: 'post', page: paginationProps.page, limit: paginationProps.limit})

    const deleteDialog = useDialog('delete-post-modal')
    const navigate = useNavigate()
    const {mutateAsync: deletePost} = useDeletePost({onSuccess: deleteDialog.close})

    const columns: any = React.useMemo(() => [
        {
            Header: '',
            accessor: 'id',
            Cell: ({row}: CellProps<Post>) => padNumber(((paginationProps.page - 1) * paginationProps.limit) + 1 + row.index),
            width: 50
        },
        {
            Header: 'Image',
            accessor: 'image',
            Cell: () => <div className='aspect-w-16 aspect-h-9 lg:aspect-none'><img src='https://picsum.photos/60/50'
                                                                                    alt=""/></div>,
            width: 100
        },
        {
            Header: 'Title',
            accessor: 'title',
            width: 1000
        },
        {
            Header: 'Last Update',
            accessor: 'lastUpdate',
            Cell: ({value}: CellProps<Post>) => {
                const date = new Date(value)
                return (
                    <div className="flex flex-col italic text-xs">
                        <span>{date.toLocaleDateString('en-US')}</span><span>{date.toLocaleTimeString('en-US')}</span>
                    </div>
                )
            },
            width: 200
        },
        {
            Header: 'State',
            accessor: 'state',
            Cell: ({value}: CellProps<Post>) => <div className="badge uppercase">{value}</div>,
            width: 200
        },
        {
            Header: '',
            accessor: 'slug',
            width: 150,
            Cell: ({value}: CellProps<Post>) => <div className='dropdown dropdown-end'>
                <label tabIndex={0} className="btn btn-sm btn-circle btn-outline border-0">
                    <CgMoreVerticalAlt/>
                </label>
                <ul tabIndex={0} className='dropdown-content menu shadow bg-base-100 w-52 rounded'>
                    <li><a onClick={() => navigate(`${value}`)}><RiPencilRuler2Line/>Edit</a></li>
                    <li><a onClick={() => deleteDialog.open(value)}><CgTrash className='text-red-500'/>Delete</a></li>
                </ul>
            </div>
        }
    ], [paginationProps.page])

    const tableData = React.useMemo(() => postsData?.data || [], [postsData?.data])

    const tableInstance = useTable({
            columns,
            data: tableData,
            defaultColumn: {
                width: 'auto'
            }
        },
        useRowSelect,
        hooks => {
            hooks.visibleColumns.push(columns => [
                {
                    id: 'selection',
                    Header: ({getToggleAllRowsSelectedProps}: any) => (
                        <div>
                            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
                        </div>
                    ),
                    Cell: ({row}: any) => (
                        <div>
                            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                        </div>
                    ),
                },
                ...columns,
            ])
        })

    return <>
        <TableBasic tableInstance={tableInstance} className='table-compact'/>
        <PaginationBar {...paginationProps} totalItems={postsData?.pagination?.total || 0}/>
        <Modal id='delete-post-modal' title={`Delete ${deleteDialog.obj?.slug}`} dialogOptions={deleteDialog} actions={[
            {
                label: 'Cancel',
                className: 'btn btn-outline border-grey-300 hover:bg-grey-100',
                action: deleteDialog.close
            },
            {
                label: 'Confirm',
                className: 'btn bg-red-500 hover:bg-red-700 border-red-700 hover:border-red-700',
                action: async () => {
                    if (deleteDialog.obj) await deletePost({slug: deleteDialog.obj})
                }
            }
        ]}>
            <p>{`Are you sure to delete this post?`}</p>
        </Modal>
    </>
}

export default PostsTable
