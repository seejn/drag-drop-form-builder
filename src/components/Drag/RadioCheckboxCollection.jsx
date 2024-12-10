import { v4 as uuidv4 } from "uuid";

import RadioCheckbox from "../Fields/RadioCheckbox.jsx";

const RadioCheckboxCollection = ({radioCheckboxFields}) => {
    const radioCheckbox = radioCheckboxFields.map((input) => (
        <RadioCheckbox
            key={uuidv4()}
            id={input?.id}
            type={input?.type}
            labelName={input?.labelName}
            items={input?.items}
        />
    ));

    return <>{radioCheckbox}</>;
}

export default RadioCheckboxCollection;