import { v4 as uuidv4 } from "uuid";

import Input from "../Fields/Input.jsx";

const InputCollection = ({ inputFields }) => {
    const fields = inputFields.map((input) => (
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

    return <>{fields}</>;
};

export default InputCollection;
