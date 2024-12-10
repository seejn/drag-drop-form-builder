import { TextField, FormControl } from "@mui/material";

import { useDrag } from "react-dnd";
import { useEffect } from "react";

const Input = ({
    id,
    labelName,
    type,
    name,
    placeholder,
    value,
    disabled = false,
    error = false,
}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "input",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));
    // useEffect(() => {
    //     console.log(isDragging);
    // }, [isDragging]);

    return (
        <>
            <div className="my-2">
                <FormControl ref={drag} error={error} className="w-full">
                    <label id={`${labelName}-label`}>{labelName}</label>
                    <TextField
                        className="w-full block"
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        defaultValue={value}
                        disabled={disabled}
                    />
                </FormControl>
            </div>
        </>
    );
};

export default Input;
