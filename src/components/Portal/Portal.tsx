import * as React from 'react';
import { createPortal } from 'react-dom';
import { IPortalProps } from './types';

const createWrapperAndAppendToBody = (wrapperId: string): HTMLDivElement => {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute('id', wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
};

const Portal = ({ children, wrapperId = 'modal-container' }: IPortalProps) => {
    const [wrapperElement, setWrapperElement] = React.useState<HTMLElement | null>(null);

    React.useEffect(() => {
        let element = document.getElementById(wrapperId);
        let systemCreated = false;
        // if element is not found with wrapperId or wrapperId is not provided,
        // create and append to body
        if (!element) {
            systemCreated = true;
            element = createWrapperAndAppendToBody(wrapperId);
        }
        setWrapperElement(element);

        return () => {
            // delete the programatically created element
            if (systemCreated && element?.parentNode) {
                element.parentNode.removeChild(element);
            }
        };
    }, [wrapperId]);

    if (wrapperElement === null) return null;

    return createPortal(children, wrapperElement);
};

export default Portal;
