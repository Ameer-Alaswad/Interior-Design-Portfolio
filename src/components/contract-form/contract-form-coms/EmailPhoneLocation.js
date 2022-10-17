import React, { useContext } from "react";
// Material UI
import TextField from "@mui/material/TextField";
// context
import { SelectedProjectContext } from "../../../projects-assets/selectedProjectContext";

const EmailPhoneLocation = ({ handleChange }) => {
  const projectsData = useContext(SelectedProjectContext);
  const { data } = projectsData;
  const { email, phone, location } = data;

  return (
    <>
      <TextField
        style={{ marginBottom: "25px" }}
        size="small"
        id="outlined-basic"
        name="email"
        value={email}
        onChange={handleChange}
        variant="outlined"
        type="email"
        label="Email Address"
        required
      />
      <TextField
        style={{ marginBottom: "25px" }}
        size="small"
        id="outlined-basic"
        name="phone"
        value={phone}
        onChange={handleChange}
        variant="outlined"
        type="number"
        label="Phone"
        required
      />
      <TextField
        style={{ marginBottom: "25px" }}
        size="small"
        id="outlined-basic"
        name="location"
        value={location}
        onChange={handleChange}
        variant="outlined"
        label="Project Location"
        required
      />
    </>
  );
};

export default EmailPhoneLocation;
