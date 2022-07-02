import React from 'react';
import {
    IUseServerSideFiltersAction,
    IUseServerSideFiltersState,
    UseServerSideFiltersActions,
    UseServerSideFiltersResult
} from "./types";

const useServerSideFiltersReducer = (state: IUseServerSideFiltersState, action: IUseServerSideFiltersAction): IUseServerSideFiltersState => {
    const {type, payload} = action
    const actions = {
        [UseServerSideFiltersActions.PREV]: () => state.page > 1 ? ({...state, page: state.page - 1}) : state,
        [UseServerSideFiltersActions.NEXT]: () => ({...state, page: state.page + 1}),
        [UseServerSideFiltersActions.SET_PAGE]: () => ({...state, page: payload}),
        [UseServerSideFiltersActions.SET_LIMIT]: () => ({...state, page: 1, limit: payload}),
        [UseServerSideFiltersActions.SET_SORT]: () => ({...state, page: 1, sort: payload}),
        [UseServerSideFiltersActions.SET_FILTERS]: () => ({...state, ...payload})
    }
    return actions[type] ? actions[type]() : state
}

const useServerSideFiltersInitialValues = {
    page: 1,
    limit: 10,
    sort: {}
}

const UseServerSideFilters = (): UseServerSideFiltersResult => {
    const [state, dispatch] = React.useReducer(useServerSideFiltersReducer, useServerSideFiltersInitialValues)

    const prev = React.useCallback(() => dispatch({type: UseServerSideFiltersActions.PREV}), [])
    const next = React.useCallback(() => dispatch({type: UseServerSideFiltersActions.NEXT}), [])
    const setPage = React.useCallback((page: number) => dispatch({
        type: UseServerSideFiltersActions.SET_PAGE,
        payload: page
    }), [])
    const setLimit = React.useCallback((page: number) => dispatch({
        type: UseServerSideFiltersActions.SET_LIMIT,
        payload: page
    }), [])
    const setSort = React.useCallback((sort: object) => dispatch({
        type: UseServerSideFiltersActions.SET_SORT,
        payload: sort
    }), [])
    const setFilters = React.useCallback((filters: object) => dispatch({
        type: UseServerSideFiltersActions.SET_FILTERS,
        payload: filters
    }), [])

    return React.useMemo(() => ({...state, prev, next, setPage, setLimit, setSort, setFilters}), [state])
};

export default UseServerSideFilters;