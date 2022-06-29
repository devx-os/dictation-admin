import React from 'react';
import {UseDialogResult} from "../../hooks/useDialog/types";

export interface IModalActions {
    label: string;
    action: () => Promise<void> | void;
    className?: string;
}

export interface IModalProps {
    id: string;
    children: React.ReactNode;
    title?: string;
    dialogOptions: UseDialogResult;
    actions?: Array<IModalActions>;
}
