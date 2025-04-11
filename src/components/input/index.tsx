import { Input as HeroInput } from '@heroui/react';
import React, { JSX } from 'react'
import { Control, useController } from 'react-hook-form';

type Props = {
    name: string;
    label: string;
    placeholder?: string;
    type?: string;
    control: Control<any>;
    required?: string;
    endContent?: JSX.Element;
}

export const Input: React.FC<Props> = ({
    name,
    label,
    placeholder,
    type,
    control,
    required = '',
    endContent,
}) => {
    const {
        field,
        fieldState: { invalid },
        formState: { errors }
    } = useController({
        name,
        control,
        rules: {
            required
        }
    })
    return (
        <HeroInput
            id={name}
            label={label}
            type={type}
            placeholder={placeholder}
            value={field.value}
            name={field.name}
            isInvalid={invalid}
            onChange={field.onChange}
            onBlur={field.onBlur}
            errorMessage={`${errors[name]?.message ?? ''}`}
        />
    )
}