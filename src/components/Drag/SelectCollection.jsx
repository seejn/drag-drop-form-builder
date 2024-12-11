import { v4 as uuidv4 } from "uuid";

import Select from "../Fields/Select.jsx";

const SelectCollection = ({ selectField }) => {
    const select = [selectField].map((select) => (
        <Select
            key={uuidv4()}
            id={select?.id}
            labelName={select?.labelName}
            selected={select?.selected}
            items={select?.items}
            disabled={true}
        />
    ));
    return <>{select}</>;
};

export default SelectCollection;
