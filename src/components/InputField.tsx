import React, {InputHTMLAttributes} from "react";
import {FormControl, FormLabel, Input, FormErrorMessage} from "@chakra-ui/react";
import {useField} from "formik";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    name:string;
};

export const InputField: React.FC<InputFieldProps> = ({label, size: _, ...props}) => {
    const [field, {error}] = useField(props);
    return (
        <FormControl isInvalid={!!error}>
            <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
            <Input {...field} {...props} id={field.name} />
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    )
}