import React, { useContext } from "react";
// Material UI
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";
// context
import { SelectedProjectContext } from "../../../projects-assets/selectedProjectContext";

const useStyles = makeStyles({
  nameLastNameStyles: {
    width: "100%",
  },
  containerStyles: {
    marginBottom: "25px",
    display: "flex",
    width: "100%",
  },
});

const NameLastName = ({ handleChange }) => {
  const classes = useStyles();
  const projectsData = useContext(SelectedProjectContext);
  const { data } = projectsData;
  const { name, lastName } = data;

  return (
    <div>
      <div className={classes.containerStyles}>
        <TextField
          className={classes.nameLastNameStyles}
          style={{
            marginRight: "10px",
          }}
          name="name"
          id="outlined-basic"
          label="Name"
          value={name}
          variant="outlined"
          required
          onChange={handleChange}
          size="small"
        />
        <TextField
          className={classes.nameLastNameStyles}
          name="lastName"
          label="Last Name"
          value={lastName}
          id="outlined-basic"
          variant="outlined"
          onChange={handleChange}
          size="small"
        />
      </div>
    </div>
  );
};

export default NameLastName;
