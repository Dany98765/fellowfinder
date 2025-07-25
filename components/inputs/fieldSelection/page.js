import "./styles.css"

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export default function MultipleSelectCheckmarks({ alt, options, expertiseFields, setExpertiseFields }) {
  const handleChange = (event) => {
    const { target: { value }, } = event;
    setExpertiseFields(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ width: 600 }}>
        <InputLabel className="altText" id="demo-multiple-checkbox-label">{alt}</InputLabel>
        <Select
          className='fieldSelection'
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={expertiseFields}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {options.map((field) => (
            <MenuItem key={field} value={field}>
              <Checkbox checked={expertiseFields.includes(field)} />
              <ListItemText primary={field} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}