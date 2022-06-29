import React from 'react';

interface TableBasicProps extends TableProps {
    tableInstance: any
    className?: string
}

const TableBasic = ({tableInstance, className = ''}: TableBasicProps) => {

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

    return (<>
            <table className={`table w-full h-fit ${className}`} {...getTableProps()}>
                <thead>
                {headerGroups.map((headerGroup: any) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column: any) => (
                            <th {...column.getHeaderProps({
                                style: {width: column.width}
                            })}>{column.render('Header')}</th>
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