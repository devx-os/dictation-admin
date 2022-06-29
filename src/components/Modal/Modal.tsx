import * as React from 'react';
import { Portal } from '../Portal';
import { CgClose } from 'react-icons/cg';
import { IModalActions, IModalProps } from './types';

const Modal = ({
    id,
    children,
    title = 'EMPTY TITLE',
    dialogOptions,
    actions = [],
    ...rest
}: IModalProps): JSX.Element | null => {
    const {opened, close} = dialogOptions;

    React.useEffect(() => {
        const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === 'Escape' ? close() : null);
        document.body.addEventListener('keydown', closeOnEscapeKey);
        return () => {
            document.body.removeEventListener('keydown', closeOnEscapeKey);
        };
    }, [close]);

    if (!opened) return null;

    return (
        <Portal wrapperId="modal-container">
            <input type="checkbox" checked={dialogOptions.opened} id={id} className="modal-toggle" />
            <div className="modal" {...rest}>
                <div className="modal-box flex flex-col md:max-w-2xl">
                    {/* MODAL HEADER */}
                    <div className="flex flex-row justify-between items-center mb-5">
                        <h5 className="uppercase">{title}</h5>
                        <button className="btn btn-square btn-sm" onClick={close}>
                            <CgClose />
                        </button>
                    </div>
                    {/* MODAL BODY */}
                    <div className="px-2">{children}</div>
                    {/* MODAL FOOTER */}
                    {actions.length ? (
                        <div className="flex flex-row justify-end items-center mt-5">
                            {actions.map(
                                (a: IModalActions, i: number): JSX.Element => (
                                    <button
                                        key={`${a.label}-${i}`}
                                        className={a.className}
                                        onClick={a.action}
                                    >
                                        {a.label}
                                    </button>
                                ),
                            )}
                        </div>
                    ) : null}
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
