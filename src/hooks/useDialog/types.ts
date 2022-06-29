export interface IUseDialogAction {
    type: UseDialogActions;
    payload?: any;
}

export interface IUseDialogState {
    id: string;
    opened: boolean;
    obj?: any
}

export type UseDialogResult = {
    open: (obj?: any) => void;
    close: () => void;
    opened: boolean;
    obj?: any;
}

export enum UseDialogActions {
    OPEN_MODAL = 'OPEN_MODAL',
    CLOSE_MODAL = 'CLOSE_MODAL'
}