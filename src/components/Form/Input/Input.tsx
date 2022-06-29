import * as React from 'react';
import {InputProps} from "./types";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, placeholder = '', className = '', inputClassName = '', type = 'text', ...rest }, ref): JSX.Element => {

        return (
            <div className={`form-control ${className}`}>
                {label && <label className="label">
                    <span className="label-text">{label}</span>
                </label>}
                <input ref={ref} {...rest} placeholder={placeholder} className={`input input-primary w-full ${inputClassName}`} type={type} />
            </div>
        );
    },
);

export default Input;
