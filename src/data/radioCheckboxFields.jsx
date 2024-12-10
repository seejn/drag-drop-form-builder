import {v4 as uuidv4} from "uuid";

const radioCheckboxFields = [
    {
        id: uuidv4(),
        labelName: "label",
        type: "radio",
        items: [
            {
                checked: false,
                name: "item1"
            },
            {
                checked: true,
                name: "item2"
            }
        ]
    },
    {
        id: uuidv4(),
        labelName: "label",
        type: "checkbox",
        items: [
            {
                checked: false,
                name: "item1"
            },
            {
                checked: true,
                name: "item2"
            }
        ]
    }
]

export default radioCheckboxFields;