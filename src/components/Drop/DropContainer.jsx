import { useContext } from "react";
import { useDrop } from "react-dnd";
import Button from "@mui/material/Button";

import { DroppedFieldContext } from "../../context/DroppedFieldContext.jsx";

const DropContainer = () => {
    const { droppedFields, setDroppedFieldState, inputFields, radioCheckboxFields, textAreaField, selectField } =
        useContext(DroppedFieldContext);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "input",
        drop: (item) => addToDroppedFields(item.id, item.type),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    const addToDroppedFields = (id, type) => {
        const MAP_TYPE_FIELD = {
            input: inputFields,
            radioCheckbox: radioCheckboxFields,
            textArea: [textAreaField],
            select: [selectField]
        }

        let toAddField = MAP_TYPE_FIELD[type].filter((field) => field.id === id);

        setDroppedFieldState((droppedFieldState) => {
            const newState = [...droppedFieldState, ...toAddField];
            localStorage.setItem("droppedFields", JSON.stringify(newState));
            return newState;
        });
    };

    return (
        <>
            <div
                ref={drop}
                className="flex flex-col m-5 w-1/2 p-5 border border-sky-500"
            >
                <div className="flex-grow">{droppedFields}</div>
                <div className="buttons flex gap-5 justify-end">
                    <Button variant="contained" color="success">
                        Preview Form
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() =>
                            setDroppedFieldState(() => {
                                localStorage.setItem(
                                    "droppedFields",
                                    JSON.stringify([])
                                );
                                return [];
                            })
                        }
                    >
                        Reset
                    </Button>
                </div>
            </div>
        </>
    );
};

export default DropContainer;
