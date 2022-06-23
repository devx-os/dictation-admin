import * as React from 'react';
import { Label } from '../Label';

interface ISelectProps {
    className?: string;
    label?: string;
    placeholder: string;
    options: string[];
}

const Select = React.forwardRef<HTMLSelectElement, ISelectProps>(
    ({ className, label, options, ...rest }: ISelectProps, ref: React.Ref<HTMLSelectElement>): JSX.Element | null => {
        if (!options?.length) {
            console.error('No options provided for Select component.');
            return null;
        }

        return (
            <div className={`form-control ${className}`}>
                {label && <Label htmlFor=''>{label}</Label>}
                <select {...rest} ref={ref} className="select select-bordered select-primary w-full">
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
