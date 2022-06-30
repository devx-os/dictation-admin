import React from 'react';
import {RiArrowDropDownFill, RiArrowDropUpFill} from "react-icons/ri";

interface TableBasicProps extends TableProps {
    tableInstance: any
    sort?: any
    setSort?: (sort: any) => void
    className?: string
}

const TableBasic = ({
                        tableInstance, sort = {}, setSort = () => {
    }, className = ''
                    }: TableBasicProps) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        page
    } = tableInstance

    const buildRow = () => {
        if ((page?.length === 0 && rows?.length === 0)) return []
        if (page?.length > 0) {
            return page.map((row: any) => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map((cell: any) => {
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                    </tr>
                )
            })
        }
        return rows.map((row: any) => {
            prepareRow(row)
            return (
                <tr {...row.getRowProps()}>
                    {row.cells.map((cell: any) => {
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                </tr>
            )
        })
    }

    const handleSort = React.useCallback((column: any) => {
        if (column.hasOwnProperty('sort') && setSort) {
            if (column.sort === 1) {
                setSort({[column.id]: -1})
            } else if (column.sort === -1) {
                const {[column.id]: prev, ...rest} = sort
                setSort({...rest})
            } else if (column.sort === 0) {
                setSort({...sort, [column.id]: 1})
            }
        }
    }, [sort])

    const handleSortIcon = (sortValue: number) => {
        if (sortValue === 1) return <RiArrowDropDownFill className='text-xl text-neutral'/>
        if (sortValue === -1) return <RiArrowDropUpFill className='text-xl text-neutral'/>
        return ''
    }

    return (<>
            <table className={`table w-full h-fit ${className}`} {...getTableProps()}>
                <thead>
                {headerGroups.map((headerGroup: any) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column: any) => (
                            <th {...column.getHeaderProps({
                                style: {
                                    width: column.width,
                                    cursor: column.hasOwnProperty('sort') ? 'pointer' : 'inherit'
                                }
                            })}>
                                <div className='flex flex-col space-y-2 justify-between h-full'>
                                    <div
                                        className={`flex flex-row h-full ${column.sort ? 'items-center' : 'items-start'}`}
                                        onClick={() => handleSort ? handleSort(column) : {}}>
                                        <span className='h-full'>{column.render('Header')}</span>
                                        <span className='h-full'>
                                            {column.sort ? handleSortIcon(column.sort) : null}
                                        </span>
                                    </div>
                                    {column.filterable && column.handleFilter &&
                                      <input className='input input-xs input-primary max-w-fit' placeholder={'search 🔎'}
                                             value={column.filterValue} onChange={column.handleFilter}/>}
                                </div>
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {buildRow()}
                </tbody>
            </table>
        </>
    );
};

export default TableBasic;