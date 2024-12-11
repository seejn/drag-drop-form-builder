import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import InputCollection from "./InputCollection.jsx";
import RadioCheckboxCollection from "./RadioCheckboxCollection.jsx";
import SelectCollection from "./SelectCollection.jsx";


import { DroppedFieldContext } from "../../context/DroppedFieldContext.jsx";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const DragContainer = () => {
    const { inputFields, radioCheckboxFields, textAreaField, selectField } =
        useContext(DroppedFieldContext);

    const [category, setCategory] = useState("input");

    const collections = {
        input: {
            label: "Input",
            field: <InputCollection inputFields={inputFields} textAreaField={textAreaField} />,
        },
        radioCheckbox: {
            label: "Radio / Checkbox",
            field: <RadioCheckboxCollection
                radioCheckboxFields={radioCheckboxFields}
            />
        },
        select: {
            label: "Select",
            field: <SelectCollection selectField={selectField} />
        }
    };

    const collectionName = Object.keys(collections);
    const tabs = collectionName.map(cname => <Tab key={uuidv4()} label={collections[cname]["label"]} value={cname} />)
    const tabPanel = collectionName.map(cname => <TabPanel key={uuidv4()} value={cname}>{collections[cname]["field"]}</TabPanel>)

    const handleChange = (event, newValue) => {
        setCategory(newValue);
    };

    return (
        <>
            <div className="m-5 w-1/2">
                <Box sx={{ width: "100%", typography: "body1" }}>
                    <TabContext value={category}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <TabList
                                onChange={handleChange}
                                aria-label="lab API tabs example"
                            >
                                {tabs}
                            </TabList>
                        </Box>
                        {tabPanel}
                    </TabContext>
                </Box>
            </div>
        </>
    );
};
export default DragContainer;
