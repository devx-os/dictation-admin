import * as React from 'react';
import {IUseDialogAction, IUseDialogState, UseDialogActions, UseDialogResult} from "./types";

const dialogInitialState = {
    opened: false,
    obj: undefined
};

const dialogReducer = (state: IUseDialogState, action: IUseDialogAction): IUseDialogState => {
    const { type, payload } = action;
    const actions = {
        [UseDialogActions.OPEN_MODAL]: () => ({ ...state, opened: true, obj: payload }),
        [UseDialogActions.CLOSE_MODAL]: () => ({ ...state, opened: false, obj: undefined })
    }
    return actions[type] ? actions[type]() : state;
};

const useDialog = (id: string): UseDialogResult => {
    const [state, dispatch] = React.useReducer(dialogReducer, { ...dialogInitialState, id });

    const open = React.useCallback((obj: any) => dispatch({ type: UseDialogActions.OPEN_MODAL, payload: obj }), []);
    const close = React.useCallback(() => dispatch({ type: UseDialogActions.CLOSE_MODAL }), []);

    return React.useMemo(() => {
        return {
            ...state,
            open,
            close,
        };
    }, [state.opened, state.obj]);
};

export default useDialog;
