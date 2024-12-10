import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DroppedFieldProvider } from "./context/DroppedFieldContext";

import App from "./App";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <DndProvider backend={HTML5Backend}>
            <DroppedFieldProvider>
                <App />
            </DroppedFieldProvider>
        </DndProvider>
    </StrictMode>
);
