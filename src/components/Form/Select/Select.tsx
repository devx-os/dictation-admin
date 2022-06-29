import * as React from 'react';

interface ISelectProps {
    className?: string;
    inputClassName?: string;
    label?: string;
    placeholder: string;
    options: React.ReactNode | React.ReactNode[];
    value?: any;
    onChange?: (event: {
        target: any;
        type?: any;
    }) => void | Promise<void | boolean>;
    name?: string
}

const Select = React.forwardRef<HTMLSelectElement, ISelectProps>(
    ({ className = '', inputClassName= '', label, options, ...rest }: ISelectProps, ref: React.Ref<HTMLSelectElement>): JSX.Element => {

        return (
            <div className={className}>
                {label && <label className="label">
                    <span className="label-text">{label}</span>
                </label>}
                <select ref={ref} {...rest} className={`select select-bordered select-primary ${inputClassName}`}>
                    {options}
                </select>
            </div>
        );
    },
);

Select.displayName = 'Select';

export default Select;
