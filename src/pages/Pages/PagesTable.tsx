import React from 'react';
import {useReadPosts} from "../../services/posts/hooks";
import {CellProps, useRowSelect, useTable} from "react-table";
import {TableBasic} from "../../components/Table";
import EditStateCell from "../../components/Cell/EditStateCell";
import {Post} from "../../services/posts/types";
import {CgMoreVerticalAlt, CgTrash} from "react-icons/cg"
import {RiPencilRuler2Line} from "react-icons/ri";
import {Modal} from "../../components/Modal";
import {useDialog} from "../../hooks/useDialog";
import {useNavigate} from "react-router-dom";

const IndeterminateCheckbox = React.forwardRef(
    ({indeterminate, ...rest}: any, ref) => {
        const defaultRef = React.useRef()
        const resolvedRef: any = ref || defaultRef

        React.useEffect(() => {
            if (resolvedRef && resolvedRef.current) resolvedRef.current.indeterminate = indeterminate
        }, [resolvedRef, indeterminate])

        return (
            <>
                <input type="checkbox" className="checkbox checkbox-primary" ref={resolvedRef} {...rest} />
            </>
        )
    }
)

const PagesTable = () => {
    const {data: postsData} = useReadPosts({type: 'page'})

    const deleteDialog = useDialog('delete-post-modal')
    const navigate = useNavigate()

    const onEditState = () => {

    }

    const columns: any = React.useMemo(() => [
        {
            Header: 'Image',
            accessor: 'image',
            Cell: () => <div className='aspect-w-16 aspect-h-9 lg:aspect-none'><img src='https://picsum.photos/60/50' alt=""/></div>,
            width: 100
        },
        {
            Header: 'Title',
            accessor: 'title',
            width: 1000
        },
        {
            Header: 'State',
            accessor: 'state',
            Cell: ({value}: CellProps<Post>) => <EditStateCell onEditState={onEditState} value={value}/>,
            width: 150
        },
        {
            Header: '',
            accessor: 'slug',
            Cell: ({value}: CellProps<Post>) => <div className='dropdown dropdown-end'>
                <label tabIndex={0} className="btn btn-sm btn-circle btn-outline border-0">
                    <CgMoreVerticalAlt/>
                </label>
                <ul tabIndex={0} className='dropdown-content menu shadow bg-base-100 w-52 rounded'>
                    <li><a onClick={() => navigate(`${value}`)}><RiPencilRuler2Line/>Modifica</a></li>
                    <li><a onClick={deleteDialog.open}><CgTrash className='text-red-500'/>Elimina</a></li>
                </ul>
            </div>
        }
    ], [])

    const tableData = React.useMemo(() => postsData?.data || [], [postsData?.data])

    const tableInstance = useTable({
            columns,
            data: tableData
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
        <Modal id='delete-post-modal' dialogOptions={deleteDialog}>
            <p>Sei sicuro?</p>
        </Modal>
    </>
}

export default PagesTable