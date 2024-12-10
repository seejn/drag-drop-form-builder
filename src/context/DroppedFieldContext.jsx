import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import radioCheckboxFields from "../data/radioCheckboxFields.jsx";
import inputFields from "../data/inputFields.jsx";

import Input from "../components/Fields/Input.jsx";
import RadioCheckbox from "../components/Fields/RadioCheckbox.jsx";

import { ThemeContext } from "@emotion/react";

export const DroppedFieldContext = createContext();

export const DroppedFieldProvider = ({ children }) => {
    const [droppedFieldState, setDroppedFieldState] = useState(
        JSON.parse(localStorage.getItem("droppedFields")) || []
    );

    const droppedFields = droppedFieldState.map((input) => {
        if (input?.type === "radio" || input?.type === "checkbox") {
            return (
                <RadioCheckbox
                    key={uuidv4()}
                    id={input?.id}
                    type={input?.type}
                    labelName={input?.labelName}
                    items={input?.items}
                />
            );
        } else {
            return (
                <Input
                    key={uuidv4()}
                    id={input?.id}
                    labelName={input?.labelName}
                    type={input?.type}
                    name={input?.name}
                    placeholder={input?.placeholder}
                    value={input?.value}
                    disabled={true}
                />
            );
        }
    });

    return (
        <DroppedFieldContext.Provider
            value={{ droppedFieldState, setDroppedFieldState, droppedFields, radioCheckboxFields, inputFields }}
        >
            {children}
        </DroppedFieldContext.Provider>
    );
};
