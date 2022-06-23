import * as React from 'react';
import { ILabelProps } from './types';

const Label = ({ children }: ILabelProps): JSX.Element => (
    <label htmlFor="" className="label">
        <span className="label-text">{children}</span>
    </label>
);

export default Label;
