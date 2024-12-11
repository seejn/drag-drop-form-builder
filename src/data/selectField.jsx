import {v4 as uuidv4} from "uuid";

const selectField = {
    id: uuidv4(),
    labelName: "select",
    type: "select",
    selected: "option1",
    items:[
        {
            value: "option1"
        },
        {
            value: "option2"
        },
    ] 
}
export default selectField;