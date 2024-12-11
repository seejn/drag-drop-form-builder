import { v4 as uuidv4 } from "uuid";

const textAreaField = {
    id: uuidv4(),
    labelName: "Text Area",
    type: "input",
    placeholder: "Your Description Here...",
    name: "name",
    value: "",
};

export default textAreaField;
