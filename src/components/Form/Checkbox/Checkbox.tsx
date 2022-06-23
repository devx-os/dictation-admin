import * as React from 'react';
import {ICheckboxProps} from './types';

const Checkbox = React.forwardRef<HTMLInputElement, ICheckboxProps>(({
                                                                         label = '',
    checked = false,
                                                                         ...rest
                                                                     }, ref): JSX.Element => {
    return (
        <div className="form-control mb-2">
            <label className="cursor-pointer label justify-start">
                <input
                    {...rest}
                    checked={checked}
                    ref={ref}
                    type="checkbox"
                    className="checkbox checkbox-primary mr-2"
                />
                <span className="label-text">{label}</span>
            </label>
        </div>
    );
})

export default Checkbox;
