import React, { useContext } from "react";
// Material UI
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
// context
import { SelectedProjectContext } from "../../../projects-assets/selectedProjectContext";

const DescriptionSharedFiles = ({ handleChange }) => {
  const projectsData = useContext(SelectedProjectContext);
  const { data } = projectsData;
  const { description, sharedFile } = data;
  return (
    <>
      <TextField
        style={{ marginBottom: "25px" }}
        id="outlined-multiline-flexible"
        variant="outlined"
        multiline
        rows={4}
        label="General description"
        name="description"
        value={description}
        onChange={handleChange}
        required
      />
      <InputLabel
        style={{ marginBottom: "25px" }}
        size="small"
        id="demo-simple-select-label"
      >
        Path to Shared Files
      </InputLabel>
      <InputLabel id="demo-simple-select-label">
        If you have pictures of the space to share, upload them to a shared file
        storage of your choice (eg - Dropbox, Google Drive) and share the path
        here
      </InputLabel>
      <TextField
        size="small"
        style={{ marginBottom: "25px" }}
        onChange={handleChange}
        name="sharedFile"
        value={sharedFile}
        id="outlined-basic"
        variant="outlined"
      />
    </>
  );
};

export default DescriptionSharedFiles;
