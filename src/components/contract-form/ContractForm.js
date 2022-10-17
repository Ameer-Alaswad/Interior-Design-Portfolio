import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";
import BasicModal from "./EmailSentModal";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = makeStyles({
  nameLastNameStyles: {
    width: "100%",
  },
});
const ContractForm = () => {
  const classes = useStyles();
  const mobile = useMediaQuery("(max-width:988px)");
  const [data, setData] = React.useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    situation: "I bought a New House and it needs some love!",
    room: "Whole House",
    description: "",
    sharedFile: "",
    budget: "Not sure!",
    contractor: "",
    heardAboutUs: "",
  });
  const [open, setOpen] = React.useState(false);
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_yjrfrso",
        "template_wxwober",
        event.target,
        "user_eOqzreECIvbYSamTDhfrv"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setOpen(true);
            setData({
              name: "",
              lastName: "",
              email: "",
              phone: "",
              location: "",
              situation: "I bought a New House and it needs some love!",
              room: "Whole House",
              description: "",
              sharedFile: "",
              budget: "Not sure!",
              contractor: "",
              heardAboutUs: "",
            });
          }
        },
        (error) => {
          alert("something went wrong, try again later!");
        }
      );
  };

  return (
    <div style={{ backgroundColor: "#b1b4bd" }}>
      <img
        style={{
          width: "100%",
          height: "450px",
          objectFit: "contain",
          marginBottom: "40px",
        }}
        src="/contract-img.png"
        alt="main-img"
      />
      <div
        style={
          mobile
            ? { width: "97%", margin: "0 auto" }
            : { width: "956px", margin: "0 auto" }
        }
      >
        <h1
          style={{
            fontFamily: "'Century Gothic', sans-serif",
          }}
        >
          Work with Ghaith Konbaz
        </h1>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div style={{ marginBottom: "25px", display: "flex", width: "100%" }}>
            <TextField
              className={classes.nameLastNameStyles}
              style={{
                marginRight: "10px",
                boxSizing: "border-box",
                width: "100%",
              }}
              name="name"
              id="outlined-basic"
              label="Name"
              value={data.name}
              variant="outlined"
              required
              onChange={handleChange}
              size="small"
            />
            <TextField
              className={classes.nameLastNameStyles}
              style={{ boxSizing: "border-box", width: "100%" }}
              name="lastName"
              label="Last Name"
              value={data.lastName}
              id="outlined-basic"
              variant="outlined"
              onChange={handleChange}
              size="small"
            />
          </div>
          <TextField
            style={{ marginBottom: "25px" }}
            size="small"
            id="outlined-basic"
            name="email"
            value={data.email}
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
            value={data.phone}
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
            value={data.location}
            onChange={handleChange}
            variant="outlined"
            label="Project Location"
            required
          />
          <TextField
            style={{ marginBottom: "25px" }}
            size="small"
            select
            name="situation"
            value={data.situation}
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
            value={data.room}
            name="room"
            required
            onChange={handleChange}
          >
            <MenuItem value="Whole House">Whole House</MenuItem>
            <MenuItem value="Kitchen">Kitchen</MenuItem>
            <MenuItem value="Bath">Bath</MenuItem>
            <MenuItem value="Bedroom">Bedroom</MenuItem>
            <MenuItem value="Utility Room / Garage">
              Utility Room / Garage
            </MenuItem>
            <MenuItem value="Utility Room / Garage">
              Utility Room / Garage
            </MenuItem>
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
          <TextField
            style={{ marginBottom: "25px" }}
            id="outlined-multiline-flexible"
            variant="outlined"
            multiline
            rows={4}
            label="General description"
            name="description"
            value={data.description}
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
            If you have pictures of the space to share, upload them to a shared
            file storage of your choice (eg - Dropbox, Google Drive) and share
            the path here
          </InputLabel>
          <TextField
            size="small"
            style={{ marginBottom: "25px" }}
            onChange={handleChange}
            name="sharedFile"
            value={data.sharedFile}
            id="outlined-basic"
            variant="outlined"
          />
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
            label="Scope / Room"
            value={data.budget}
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
            value={data.contractor}
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
            value={data.heardAboutUs}
            onChange={handleChange}
            label="How did you hear about us?"
          />
          <Button
            data-test-id="view-projects-button"
            type="submit"
            style={{
              margin: "0 auto",
              marginTop: "20px",
              marginBottom: "50px",
              backgroundColor: "#261F18",
              borderRadius: "0",
              fontSize: "12px",
              letterSpacing: "3px",
              padding: "13px",
              width: "185px",
            }}
            variant="contained"
          >
            Submit
          </Button>
        </form>
      </div>
      {<BasicModal open={open} setOpen={setOpen} />}
    </div>
  );
};

export default ContractForm;
