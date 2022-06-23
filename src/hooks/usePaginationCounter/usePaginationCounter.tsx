import React from 'react';
import { padNumber } from '../../utils/number';
import { useTranslation } from 'react-i18next';
import {ACTIONS, UsePaginationCounterPayload, UsePaginationCounterAction, UsePaginationCounterState} from "./types";

const usePaginationCounterReducer = (state: UsePaginationCounterState, action: UsePaginationCounterAction) => {
    const { type, payload } = action;
    const { tableInstance, translate }: UsePaginationCounterPayload = payload;
    switch (type) {
        case ACTIONS.UPDATE_PAGINATION_COUNTER:
            const totalResultsCount = tableInstance?.filteredRows?.length || tableInstance?.data?.length || 0;
            const maxResultChunkSize = Math.floor(totalResultsCount / tableInstance?.state?.pageSize) * 10 || 0;

            const currentPageSize =
                tableInstance?.state?.pageSize * tableInstance?.state?.pageIndex +
                tableInstance?.page?.length || 0;

            const startItem = currentPageSize - tableInstance?.state?.pageSize + 1 > 0 ? padNumber(currentPageSize - tableInstance?.state?.pageSize + 1) : padNumber(0);

            return {
                totalResultsCount,
                maxResultChunkSize,
                currentPageSize,
                paginationMessage: `${startItem} - ${padNumber(currentPageSize)} ${translate('common:generic.resultsOf')} ${padNumber(totalResultsCount)}`
            };
        default:
            return state;
    }
};

const usePaginationCounterInitialState = {
    totalResultsCount: 0,
    maxResultChunkSize: 0,
    currentPageSize: 0,
    paginationMessage: ''
};

const usePaginationCounter = (tableInstance: any) => {
    const [state, dispatch] = React.useReducer(usePaginationCounterReducer, usePaginationCounterInitialState);
    const { t } = useTranslation(['common']);

    React.useEffect(() => {
        dispatch({ type: ACTIONS.UPDATE_PAGINATION_COUNTER, payload: { tableInstance, translate: t } });
    }, [tableInstance.filteredRows, tableInstance.page, tableInstance.state]);

    return state;
};

export default usePaginationCounter;