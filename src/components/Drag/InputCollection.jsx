import { v4 as uuidv4 } from "uuid";

import Input from "../Fields/Input.jsx";
import TextArea from "../Fields/TextArea.jsx";

const InputCollection = ({ inputFields, textAreaField }) => {
    let fields = inputFields.map((input) => (
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
    ));

    fields = [
        ...fields,
        <TextArea
            key={uuidv4()}
            disabled={true}
            id={textAreaField?.id}
            labelName={textAreaField?.labelName}
            name={textAreaField?.name}
            placeholder={textAreaField?.placeholder}
            value={textAreaField?.value}
        />,
    ];
    return <>{fields}</>;
};

export default InputCollection;
