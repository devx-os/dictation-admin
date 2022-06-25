import * as React from 'react';
import { ILabelProps } from './types';

const Label = ({ htmlFor, children }: ILabelProps): JSX.Element => (
    <label htmlFor={htmlFor} className="label">
        <span className="label-text">{children}</span>
    </label>
);

export default Label;
