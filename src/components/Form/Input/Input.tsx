import * as React from 'react';
import { Label } from '../Label';
import {InputProps} from "./types";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, placeholder = '', className = '', type = 'text', ...rest }, ref): JSX.Element => {
        return (
            <div className={`form-control ${className}`}>
                {label && <Label htmlFor={rest.name || ''}>{label}</Label>}
                <input {...rest} ref={ref} placeholder={placeholder} className="input input-primary" type={type} />
            </div>
        );
    },
);

export default Input;
