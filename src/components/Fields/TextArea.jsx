import { TextField, FormControl } from "@mui/material";

import { useDrag } from 'react-dnd';

const TextArea = (
    {
        id,
        labelName,
        name,
        placeholder,
        value,
        disabled = false,
        error = false,
    }
) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "input",
        item: { id: id, type: "textArea" },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <>
            <div className="my-2">
                <FormControl ref={drag} error={error} className="w-full">
                    <label id={`${labelName}-label`}>{labelName}</label>
                    <TextField
                        className="w-full block"
                        name={name}
                        placeholder={placeholder}
                        defaultValue={value}
                        disabled={disabled}
                        multiline
                        maxRows={4}
                    />
                </FormControl>
            </div>
        </>
    );
}
export default TextArea;