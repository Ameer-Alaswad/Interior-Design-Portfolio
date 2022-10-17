import React, { useContext } from "react";
// Material UI
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
// context
import { SelectedProjectContext } from "../../../projects-assets/selectedProjectContext";

const SituationRoom = ({ handleChange }) => {
  const projectsData = useContext(SelectedProjectContext);
  const { data } = projectsData;
  const { situation, room } = data;
  return (
    <>
      <TextField
        style={{ marginBottom: "25px" }}
        size="small"
        select
        name="situation"
        value={situation}
        id="demo-simple-select"
        label="What's the situation"
        required
        onChange={handleChange}
      >
        <MenuItem value="I bought a New House and it needs some love!">
          I bought a New House and it needs some love!
        </MenuItem>
        <MenuItem value="I've been living in the house - have some ideas">
          I've been living in the house - have some ideas
        </MenuItem>
        <MenuItem value="Seriously looking at a new house - need ideas">
          Seriously looking at a new house - need ideas
        </MenuItem>
        <MenuItem value="Helping someone else to update a home">
          Helping someone else to update a home
        </MenuItem>
        <MenuItem value="Commercial property - I'll explain">
          Commercial property - I'll explain
        </MenuItem>
        <MenuItem value="Other">Other</MenuItem>
      </TextField>
      <TextField
        style={{ marginBottom: "25px" }}
        size="small"
        select
        id="demo-simple-select"
        label="Scope / Room"
        value={room}
        name="room"
        required
        onChange={handleChange}
      >
        <MenuItem value="Whole House">Whole House</MenuItem>
        <MenuItem value="Kitchen">Kitchen</MenuItem>
        <MenuItem value="Bath">Bath</MenuItem>
        <MenuItem value="Bedroom">Bedroom</MenuItem>
        <MenuItem value="Utility Room / Garage">Utility Room / Garage</MenuItem>
        <MenuItem value="Utility Room / Garage">Utility Room / Garage</MenuItem>
        <MenuItem value="Exterior House Ideas (Paint/Fence)">
          Exterior House Ideas (Paint/Fence)
        </MenuItem>
        <MenuItem value="Decorating / Furniture Selection">
          Decorating / Furniture Selection
        </MenuItem>
        <MenuItem value="Not Sure / I'm not sure where to begin">
          Not Sure / I'm not sure where to begin
        </MenuItem>
      </TextField>
    </>
  );
};

export default SituationRoom;
