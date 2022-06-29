import React from 'react';
import {
    IUseServerSidePaginationAction,
    IUseServerSidePaginationState,
    UseServerSidePaginationActions,
    UseServerSidePaginationResult
} from "./types";

const useServerSidePaginationReducer = (state: IUseServerSidePaginationState, action: IUseServerSidePaginationAction): IUseServerSidePaginationState => {
    const {type, payload} = action
    const actions = {
        [UseServerSidePaginationActions.PREV]: () => state.page > 1 ? ({...state, page: state.page - 1}) : state,
        [UseServerSidePaginationActions.NEXT]: () => ({...state, page: state.page + 1}),
        [UseServerSidePaginationActions.SET_PAGE]: () => ({...state, page: payload}),
        [UseServerSidePaginationActions.SET_LIMIT]: () => ({...state, page: 1, limit: payload}),
    }
    return actions[type] ? actions[type]() : state
}

const useServerSidePaginationInitialValues = {
    page: 1,
    limit: 2
}

const UseServerSidePagination = (): UseServerSidePaginationResult => {
    const [state, dispatch] = React.useReducer(useServerSidePaginationReducer, useServerSidePaginationInitialValues)

    const prev = React.useCallback(() => dispatch({type: UseServerSidePaginationActions.PREV}), [])
    const next = React.useCallback(() => dispatch({type: UseServerSidePaginationActions.NEXT}), [])
    const setPage = React.useCallback((page: number) => dispatch({
        type: UseServerSidePaginationActions.SET_PAGE,
        payload: page
    }), [])
    const setLimit = React.useCallback((page: number) => dispatch({
        type: UseServerSidePaginationActions.SET_LIMIT,
        payload: page
    }), [])

    return React.useMemo(() => ({...state, prev, next, setPage, setLimit}), [state.page, state.limit])
};

export default UseServerSidePagination;