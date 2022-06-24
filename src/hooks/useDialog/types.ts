
export interface IOpenModalPayload {
    selectedId?: string;
    itemData?: object;
}

export interface IUseDialogAction {
    type: UseDialogActions;
    payload?: IOpenModalPayload;
}

export interface IUseDialogState {
    id: string;
    opened: boolean;
    selectedId?: string;
    itemData?: any;
}

export type UseDialogResult = {
    open: () => void;
    close: () => void;
    setSelectedId: (selectedId: string) => void;
    setItemData: (itemData: any) => void;
    opened: boolean;
    selectedId?: string;
    itemData?: any
}

export enum UseDialogActions {
    SET_ITEM_ID = 'SET_ITEM_ID',
    SET_ITEM_DATA = 'SET_ITEM_DATA',
    OPEN_MODAL = 'OPEN_MODAL',
    CLOSE_MODAL = 'CLOSE_MODAL',
}