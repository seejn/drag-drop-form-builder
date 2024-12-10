import {v4 as uuidv4} from "uuid";

const today = new Date();
const formattedDate = today.getFullYear() + '-' + 
                      String(today.getMonth() + 1).padStart(2, '0') + '-' + 
                      String(today.getDate()).padStart(2, '0');

const inputFields = [
    {
        id: uuidv4(),
        type: "text",
        labelName: "Label",
        placeholder: "placeholder",
        name: "name",
        value: ""
    },
    {
        id: uuidv4(),
        type: "email",
        labelName: "Email",
        placeholder: "your-email@example.com",
        name: "email",
        value: ""
    },
    {
        id: uuidv4(),
        type: "password",
        labelName: "password",
        placeholder: "Enter your password",
        name: "password",
        value: ""
    },
    {
        id: uuidv4(),
        type: "date",
        labelName: "Date",
        placeholder: "",
        name: "date",
        value: ""
    },
    {
        id: uuidv4(),
        type: "file",
        labelName: "Choose file",
        placeholder: "",
        name: "file",
        value: ""
    }
];

export default inputFields