import {useState} from "react";
import {useDrag} from "react-dnd"
import {v4 as uuidv4} from "uuid";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {Select as SelectMUI} from '@mui/material';


const Select = ({id, labelName, selected="", items, disabled=false}) => {
    const [value, setValue] = useState(selected);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "input",
        item: { id: id, type: "select" },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    const menuItem = items.map(item => <MenuItem key={uuidv4()} value={item.value}>{item.value}</MenuItem>);

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <>
            <div className="m-2"  ref={drag}>
                <FormControl fullWidth>
                    <label id="demo-simple-select-label">{labelName}</label>
                    <SelectMUI
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Age"
                    onChange={handleChange}
                    disabled={disabled}
                    >
                        {menuItem}
                    </SelectMUI>
                </FormControl>
            </div>
        </>
    );
}

export default Select;