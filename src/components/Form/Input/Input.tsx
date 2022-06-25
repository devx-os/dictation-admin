import * as React from 'react';
import { Label } from '../Label';
import {InputProps} from "./types";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, placeholder = '', className = '', inputClassName = '', type = 'text', ...rest }, ref): JSX.Element => {
        const { value, name = '', ...hookFormProps } = rest;

        return (
            <div className={`form-control ${className}`}>
                {label && <Label htmlFor={name}>{label}</Label>}
                <input {...hookFormProps}
                       value={value}
                       ref={ref} id={name} placeholder={placeholder} className={`input input-primary w-full ${inputClassName}`} type={type} />
            </div>
        );
    },
);

export default Input;
