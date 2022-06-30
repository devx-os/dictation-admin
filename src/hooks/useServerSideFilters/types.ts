export interface IUseServerSideFiltersAction {
    type: UseServerSideFiltersActions;
    payload?: any;
}

export interface IUseServerSideFiltersState {
    page: number
    limit: number
    sort: any
}

export type UseServerSideFiltersResult = {
    page: number
    limit: number,
    sort: any,
    prev: () => void,
    next: () => void,
    setPage: (page: number) => void
    setLimit: (limit: number) => void
    setSort: (sort: object) => void
    setFilters: (filters: object) => void
}

export enum UseServerSideFiltersActions {
    NEXT = 'NEXT',
    PREV = 'PREV',
    SET_PAGE = 'SET_PAGE',
    SET_LIMIT = 'SET_LIMIT',
    SET_SORT = 'SET_SORT',
    SET_FILTERS = 'SET_FILTERS'
}