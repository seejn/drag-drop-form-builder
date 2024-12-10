import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from '@mui/material/FormGroup';
import {v4 as uuidv4} from "uuid";

import { useDrag } from "react-dnd";

const RadioCheckbox = ({ id, type, labelName, items }) => {
    const obj = {
        radio: <Radio />,
        checkbox: <Checkbox />,
    };

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "input",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    const formControlLabel = items.map((item) => {
        const labelName = `${item?.name
            .charAt(0)
            .toUpperCase()}${item?.name.slice(1)}`;
        return (
            <FormControlLabel
                key={uuidv4()}
                value={item?.name}
                checked={item?.checked}
                control={obj[type]}
                label={labelName}
            />
        );
    });

    const group =
        type === "radio" ? (
            <RadioGroup row>{formControlLabel}</RadioGroup>
        ) : (
            <FormGroup row>{formControlLabel}</FormGroup>
        );

    return (
        <FormControl ref={drag}>
            <FormLabel>{labelName}</FormLabel>
            {group}
        </FormControl>
    );
};

export default RadioCheckbox;
