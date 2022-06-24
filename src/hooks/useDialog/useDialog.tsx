import * as React from 'react';

const dialogInitialState = {
    opened: false,
    selectedId: undefined,
    itemData: undefined,
};

const dialogReducer = (state: IUseDialogState, action: IUseDialogAction): IUseDialogState => {
    const { type, payload } = action;
    const actions = {
        [UseDialogActions.SET_ITEM_DATA]: () => ({ ...state, itemData: payload?.itemData }),
        [UseDialogActions.SET_ITEM_ID]: () => ({ ...state, selectedId: payload?.selectedId }),
        [UseDialogActions.OPEN_MODAL]: () => ({ ...state, opened: true }),
        [UseDialogActions.CLOSE_MODAL]: () => ({ ...state, opened: false, selectedId: undefined, itemData: undefined }),
    }
    return actions[type] ? actions[type]() : state;
};

const useDialog = (id: string): UseDialogResult => {
    const [state, dispatch] = React.useReducer(dialogReducer, { ...dialogInitialState, id });

    const open = React.useCallback(() => dispatch({ type: UseDialogActions.OPEN_MODAL }), []);
    const close = React.useCallback(() => dispatch({ type: UseDialogActions.CLOSE_MODAL }), []);
    const setSelectedId = React.useCallback((selectedId: string) =>
        dispatch({ type: UseDialogActions.SET_ITEM_ID, payload: { selectedId } }), []);
    const setItemData = React.useCallback((itemData: object) => dispatch({ type: UseDialogActions.SET_ITEM_DATA, payload: { itemData } }), []);

    return React.useMemo(() => {
        return {
            ...state,
            open,
            close,
            setSelectedId,
            setItemData
        };
    }, [state.opened, state.selectedId, state.itemData]);
};

export default useDialog;
