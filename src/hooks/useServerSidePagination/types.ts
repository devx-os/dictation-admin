export interface IUseServerSidePaginationAction {
    type: UseServerSidePaginationActions;
    payload?: any;
}

export interface IUseServerSidePaginationState {
    page: number
    limit: number
}

export type UseServerSidePaginationResult = {
    page: number
    limit: number,
    prev: () => void,
    next: () => void,
    setPage: (page: number) => void
    setLimit: (limit: number) => void
}

export enum UseServerSidePaginationActions {
    NEXT = 'NEXT',
    PREV = 'PREV',
    SET_PAGE = 'SET_PAGE',
    SET_LIMIT = 'SET_LIMIT'
}