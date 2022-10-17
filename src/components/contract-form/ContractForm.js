import React, { useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";
import BasicModal from "./EmailSentModal";
import useMediaQuery from "@mui/material/useMediaQuery";
import { SelectedProjectContext } from "../../projects-assets/selectedProjectContext";
import NameLastName from "./contract-form-coms/NameLastName";
import EmailPhoneLocation from "./contract-form-coms/EmailPhoneLocation";
import SituationRoom from "./contract-form-coms/SituationRoom";
import DescriptionSharedFiles from "./contract-form-coms/descriptionSharedFiles";
import BudgetContractorHeard from "./contract-form-coms/BudgetContractorHeard";

const ContractForm = () => {
  const mobile = useMediaQuery("(max-width:988px)");
  const projectsData = useContext(SelectedProjectContext);

  const { data, setData } = projectsData;
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
  const imageStyles = {
    width: "100%",
    height: "450px",
    objectFit: "contain",
    marginBottom: "40px",
  };
  const contentContainer = { width: "97%", margin: "0 auto" };
  const contentContainerResponsive = { ...contentContainer, width: "956px" };
  const formStyles = { display: "flex", flexDirection: "column" };
  const submitButtonStyles = {
    margin: "0 auto",
    marginTop: "20px",
    marginBottom: "50px",
    backgroundColor: "#261F18",
    borderRadius: "0",
    fontSize: "12px",
    letterSpacing: "3px",
    padding: "13px",
    width: "185px",
  };
  return (
    <main style={{ backgroundColor: "#b1b4bd" }}>
      <img style={imageStyles} src="/contract-img.png" alt="main-img" />
      <section style={mobile ? contentContainer : contentContainerResponsive}>
        <h1
          style={{
            fontFamily: "'Century Gothic', sans-serif",
          }}
        >
          Work with Ghaith Konbaz
        </h1>
        <form onSubmit={handleSubmit} style={formStyles}>
          {/* name and lastName component  */}
          <NameLastName handleChange={handleChange} />
          {/* Email, phone and location component  */}
          <EmailPhoneLocation handleChange={handleChange} />
          {/* Situation and room  */}
          <SituationRoom handleChange={handleChange} />
          {/* Description and shared files  */}
          <DescriptionSharedFiles handleChange={handleChange} />
          {/* Budget, constructor and heard about us  */}
          <BudgetContractorHeard handleChange={handleChange} />
          <Button
            data-test-id="view-projects-button"
            type="submit"
            style={submitButtonStyles}
            variant="contained"
          >
            Submit
          </Button>
        </form>
      </section>
      {<BasicModal open={open} setOpen={setOpen} />}
    </main>
  );
};

export default ContractForm;
