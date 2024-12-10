import { useState } from "react";

import DragContainer from "./components/Drag/DragContainer.jsx";
import DropContainer from "./components/Drop/DropContainer.jsx";
import "./index.css";

function App() {

    return (
        <>
            <div className="flex container mx-auto">
                <DragContainer />
                <DropContainer />
            </div>
        </>
    );
}

export default App;
