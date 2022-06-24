import React from 'react';

export interface IModalActions {
    label: string;
    action: () => Promise<void>;
    color?: string;
}

export interface IModalProps {
    id: string;
    children: React.ReactNode;
    title?: string;
    dialogOptions: UseDialogResult;
    actions?: Array<IModalActions>;
}
