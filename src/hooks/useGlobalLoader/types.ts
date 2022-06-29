export interface IUseLoaderAction {
    type: UseLoaderActions;
    payload?: any;
}

export interface IUseLoaderState {
    id: string;
    opened: boolean;
}

export type UseLoaderResult = {
    start: () => void;
    stop: () => void;
}

export enum UseLoaderActions {
    START_LOADER = 'START_LOADER',
    STOP_LOADER = 'STOP_LOADER'
}