import React from 'react';
import {CellProps, useRowSelect, useTable} from "react-table";
import {TableBasic} from "../../../components/Table";
import {Post} from "../../../services/posts/types";
import {CgMoreVerticalAlt, CgTrash} from "react-icons/cg"
import {RiPencilRuler2Line} from "react-icons/ri";
import {Modal} from "../../../components/Modal";
import {useDialog} from "../../../hooks/useDialog";
import {useNavigate} from "react-router-dom";
import {padNumber} from "../../../utils/number";
import {useServerSideFilters} from "../../../hooks";
import PaginationBar from "../../../components/PaginationBar/PaginationBar";
import useDebounce from "../../../hooks/useDebounce/useDebounce";
import useReadUsers from "../../../services/user/hooks/useReadUsers";
import {useDeleteUser} from "../../../services/user/hooks";

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

const UsersTable = () => {
    const {page, setPage, limit, setLimit, sort, setSort, setFilters, prev, next, ...filters} = useServerSideFilters()
    const [filtersState, setFiltersState] = React.useState<any>({})
    const debouncedFilters = useDebounce(filtersState, 750)

    const deleteDialog = useDialog('delete-user-modal')
    const navigate = useNavigate()

    const {data: usersData} = useReadUsers({...filters, page, limit, sort})
    const {mutateAsync: deleteUser} = useDeleteUser({onSuccess: deleteDialog.close})

    React.useEffect(() => {
        setFilters({...filters, ...debouncedFilters })
    },[debouncedFilters])

    const columns: any = React.useMemo(() => {
        return [
            {
                Header: '',
                accessor: 'id',
                Cell: ({row}: CellProps<Post>) => <span className='text-xs font-bold'>{padNumber(((page - 1) * limit) + 1 + row.index)}</span>,
                width: 50
            },
            {
                Header: 'Image',
                accessor: 'image',
                Cell: () => <div className='aspect-w-16 aspect-h-9 lg:aspect-none'><img src='https://picsum.photos/60/50' alt=""/></div>,
                width: 100
            },
            {
                Header: 'Username',
                accessor: 'username',
                width: 500,
                sort: sort.username || 0,
            },
            {
                Header: 'Email',
                accessor: 'email',
                width: 500,
                sort: sort.email || 0,
            },
            {
                Header: 'State',
                accessor: 'state',
                Cell: ({value}: CellProps<Post>) => <div className="badge uppercase">{value}</div>,
                width: 200,
                sort: sort.state || 0
            },
            {
                Header: '',
                accessor: 'id',
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
        ]
    }, [page, sort, filtersState])

    const tableData = React.useMemo(() => usersData?.data || [], [usersData?.data])

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
        <TableBasic tableInstance={tableInstance} sort={sort} setSort={setSort} className='table-compact'/>
        <PaginationBar page={page} limit={limit} setPage={setPage} setLimit={setLimit} totalItems={usersData?.pagination?.total || 0}/>
        <Modal id='delete-user-modal' title={`Delete ${deleteDialog.obj}`} dialogOptions={deleteDialog} actions={[
            {
                label: 'Cancel',
                className: 'btn btn-outline border-grey-300 hover:bg-grey-100',
                action: deleteDialog.close
            },
            {
                label: 'Confirm',
                className: 'btn bg-red-500 hover:bg-red-700 border-red-700 hover:border-red-700',
                action: async () => {
                    if (deleteDialog.obj) await deleteUser({id: deleteDialog.obj})
                }
            }
        ]}>
            <p>{`Are you sure to delete this user?`}</p>
        </Modal>
    </>
}

export default UsersTable
