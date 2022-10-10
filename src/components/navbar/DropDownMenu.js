import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import makeStyles from "@material-ui/styles/makeStyles";
import { useNavigate } from "react-router-dom";
import { Fade } from "@mui/material";
import { SelectedProjectContext } from "../../projects-assets/selectedProjectContext";
import data from "../../projects-assets/projectText.json";

const useStyles = makeStyles({
  popOverRoot: {
    pointerEvents: "none",
  },
});

function SimpleMenu() {
  const projectsData = useContext(SelectedProjectContext);
  const { selectedProject, setSelectedProject } = projectsData;
  const filterSelectedProject = data.projectsData.map((project) => {
    return project.projectName;
  });
  const navigate = useNavigate();
  let currentlyHovering = false;
  const styles = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleMouseOver(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleHover() {
    currentlyHovering = true;
  }

  function handleClose(e) {
    setAnchorEl(null);
  }
  function handleCloseMenuItem(e) {
    setSelectedProject(e.target.innerText);
    setAnchorEl(null);
    navigate("/projects");
  }

  function handleCloseHover() {
    currentlyHovering = false;
    setTimeout(() => {
      if (!currentlyHovering) {
        handleClose();
      }
    }, 50);
  }

  return (
    <div>
      <Button
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="false"
        onClick={() => navigate("/projects")}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleCloseHover}
        style={{ color: "white" }}
      >
        PROJECTS
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          onMouseEnter: handleHover,
          onMouseLeave: handleCloseHover,
          style: { pointerEvents: "auto" },
        }}
        getContentAnchorEl={null}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        PopoverClasses={{
          root: styles.popOverRoot,
        }}
        TransitionComponent={Fade}
      >
        {filterSelectedProject &&
          filterSelectedProject.map((project) => (
            <MenuItem key={project} onClick={handleCloseMenuItem}>
              {project}
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
}

export default SimpleMenu;
