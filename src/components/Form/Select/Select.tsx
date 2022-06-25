import * as React from 'react';
import { Label } from '../Label';

interface ISelectProps {
    className?: string;
    label?: string;
    placeholder: string;
    options: string[];
    value?: any;
    onChange?: (event: {
        target: any;
        type?: any;
    }) => void | Promise<void | boolean>;
    name?: string
}

const Select = React.forwardRef<HTMLSelectElement, ISelectProps>(
    ({ className, label, options, onChange = () => {}, ...rest }: ISelectProps, ref: React.Ref<HTMLSelectElement>): JSX.Element => {
        const { value, name = '', ...hookFormProps } = rest;

        return (
            <div className={`form-control ${className}`}>
                {label && <Label htmlFor={name}>{label}</Label>}
                <select value={value} onChange={onChange} {...hookFormProps} ref={ref} className="select select-bordered select-primary w-full">
                    {options.map((o: string, i) => (
                        <option key={`${o}-${i}`}>{o}</option>
                    ))}
                </select>
            </div>
        );
    },
);

Select.displayName = 'Select';

export default Select;
