import * as React from 'react';
import {IUseDialogAction, IUseDialogState, UseDialogActions, UseDialogResult} from "./types";

const dialogInitialState = {
    opened: false,
    selectedId: undefined,
    itemData: undefined,
};

const dialogReducer = (state: IUseDialogState, action: IUseDialogAction): IUseDialogState => {
    const { type, payload } = action;
    switch (type) {
        case UseDialogActions.SET_ITEM_DATA:
            return { ...state, opened: true, itemData: payload?.itemData };
        case UseDialogActions.SET_ITEM_ID:
            return { ...state, opened: true, selectedId: payload?.selectedId };
        case UseDialogActions.OPEN_MODAL:
            return { ...state, opened: true };
        case UseDialogActions.CLOSE_MODAL:
            return { ...state, opened: false, selectedId: undefined, itemData: undefined };
        default:
            return state;
    }
};

const useDialog = (id: string): UseDialogResult => {
    const [state, dispatch] = React.useReducer(dialogReducer, { ...dialogInitialState, id });

    const open = () => dispatch({ type: UseDialogActions.OPEN_MODAL });
    const close = () => dispatch({ type: UseDialogActions.CLOSE_MODAL });
    const setSelectedId = (selectedId: string) =>
        dispatch({ type: UseDialogActions.SET_ITEM_ID, payload: { selectedId } });
    const setItemData = (itemData: object) => dispatch({ type: UseDialogActions.SET_ITEM_DATA, payload: { itemData } });

    return {
        ...state,
        open,
        close,
        setSelectedId,
        setItemData,
    };
};

export default useDialog;
