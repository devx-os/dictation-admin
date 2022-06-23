export type UsePaginationCounterState = {
    totalResultsCount: number,
    maxResultChunkSize: number,
    currentPageSize: number,
    paginationMessage: string,
}

export type UsePaginationCounterPayload = {
    tableInstance: any,
    translate: (arg0: string) => string
}

export type UsePaginationCounterAction = {
    type: ACTIONS
    payload: UsePaginationCounterPayload
}

export enum ACTIONS {
    'UPDATE_PAGINATION_COUNTER'
}