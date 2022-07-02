import React from 'react';
import {padNumber} from "../../utils/number";

const PaginationBar = ({
                           page = 0,
                           limit = 0,
                           setPage,
                           setLimit,
                           totalItems = 0,
                           className = ''
                       }: PaginationBarProps) => {

    const N_LEFT_BUTTONS = 2
    const N_RIGHT_BUTTONS = 2
    const SHOW_EXTREME_BUTTONS = true
    const N_ITEMS_OPTIONS = [10,25,50]

    const [buttonsNumbers, setButtonsNumbers] = React.useState<number[]>([])

    const FirstPageButton = () => (<button disabled={page === 1} className={`btn btn-sm btn-outline`}
                                           onClick={() => setPage(1)}>{`<<`}
    </button>)

    const LastPageButton = () => (
        <button disabled={page === Math.ceil(totalItems / limit)} className={`btn btn-sm btn-outline`}
                onClick={() => setPage(Math.ceil(totalItems / limit))}>{`>>`}
        </button>)

    React.useEffect(() => {
        const MAX_PAGE = Math.ceil(totalItems / limit)
        const arr: number[] = []
        if (page > 0) {
            let i = page - 1, j = page + 1
            while (i > 0 && page - i < N_LEFT_BUTTONS + 1) {
                arr.push(i)
                i--
            }
            arr.reverse()
            arr.push(page)
            while (page < MAX_PAGE && j - page < N_RIGHT_BUTTONS + 1) {
                if (j - 1 < MAX_PAGE) arr.push(j)
                j++
            }
        }
        setButtonsNumbers(arr)
    }, [page, limit, totalItems])

    const Buttons = () => React.useMemo(() => {
        return <div className="btn-group">
            {SHOW_EXTREME_BUTTONS && <FirstPageButton/>}
            {buttonsNumbers.map((b, i) => (
                <button key={`${b}-${i}`} className={`btn btn-sm ${page === b ? 'btn-active' : ''}`}
                        onClick={() => setPage(b)}>{b}
                </button>
            ))}
            {SHOW_EXTREME_BUTTONS && <LastPageButton/>}
        </div>
    }, [buttonsNumbers])


    return (
        <div className={`w-full flex flex-col space-y-2 md:flex-row md:space-y-0 md:justify-between ${className}`}>
            <div className='flex flex-grow items-center justify-center md:justify-start'>
                <span>{`${padNumber(((page - 1) * limit) + 1)} - ${padNumber(totalItems < page * limit ? totalItems : page * limit)} of ${padNumber(totalItems)} items`}</span>
            </div>
            <div className='flex flex-grow items-center justify-center md:justify-center'>
                <div className='flex flex-row space-x-2'>
                    {buttonsNumbers.length > 0 && <Buttons/>}
                </div>
            </div>
            <div className='flex flex-grow space-x-2 items-center justify-center md:justify-end'>
                <span>{`Items to show`}</span>
                <select className='select select-sm select-primary'  defaultValue={N_ITEMS_OPTIONS[0]} onChange={(e) => setLimit(Number(e.target.value))}>
                    {N_ITEMS_OPTIONS.map((o, i) => <option key={`${o}-${i}`}
                                                           value={o}>{o}</option>)}
                </select>
            </div>
        </div>
    );
};

export default PaginationBar;