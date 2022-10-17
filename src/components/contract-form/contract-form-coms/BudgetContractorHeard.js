import React, { useContext } from "react";
// Material UI
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

// context
import { SelectedProjectContext } from "../../../projects-assets/selectedProjectContext";

const BudgetContractorHeard = ({ handleChange }) => {
  const projectsData = useContext(SelectedProjectContext);
  const { data } = projectsData;
  const { budget, contractor, heardAboutUs } = data;
  return (
    <>
      <InputLabel id="demo-simple-select-label">Budget</InputLabel>
      <InputLabel
        style={{ marginBottom: "10px" }}
        id="demo-simple-select-label"
      >
        Total renovation budget for project–not just design costs
      </InputLabel>
      <TextField
        style={{ marginBottom: "25px" }}
        size="small"
        select
        id="demo-simple-select"
        label="Budget"
        value={budget}
        name="budget"
        onChange={handleChange}
      >
        <MenuItem value="Not sure!">Not sure!</MenuItem>
        <MenuItem value="$5k - $10k">$5k - $10k</MenuItem>
        <MenuItem value="$10k - $20k">$10k - $20k</MenuItem>
        <MenuItem value="$20k - $50k">$20k - $50k</MenuItem>
        <MenuItem value="$50k - $100k">$50k - $100k</MenuItem>
        <MenuItem value="$100k - $200k">$100k - $200k</MenuItem>
      </TextField>
      <FormLabel id="demo-controlled-radio-buttons-group">
        Already have a contractor?
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="contractor"
        value={contractor}
        onChange={handleChange}
        style={{ marginBottom: "25px" }}
        size="small"
      >
        <FormControlLabel value="Yes" control={<Radio />} label="yes" />
        <FormControlLabel value="No" control={<Radio />} label="no" />
      </RadioGroup>
      <TextField
        size="small"
        id="outlined-basic"
        variant="outlined"
        name="heardAboutUs"
        value={heardAboutUs}
        onChange={handleChange}
        label="How did you hear about us?"
      />
    </>
  );
};

export default BudgetContractorHeard;
