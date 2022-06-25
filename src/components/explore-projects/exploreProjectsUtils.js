const setStyesOnProjectImage = (styles, element) => {
  Object.assign(element.style, styles);
};
const handleHoverLogic = ({
  e,
  onHoverClass,
  noneHoveredProjectImagesStyle,
  setLayoutVisible,
}) => {
  const imagesLists = e.target.parentNode.parentNode.children;
  [...imagesLists].map((imageList) => {
    const image = imageList.children[0];
    let hoveredImage = e.target;
    imageList.style.zIndex = "3";
    image.style.opacity = "0.5";
    if (image === hoveredImage) {
      hoveredImage = hoveredImage.parentNode;
      e.target.style.opacity = "1";
      return setStyesOnProjectImage(onHoverClass, hoveredImage, imageList);
    }
    return setStyesOnProjectImage(noneHoveredProjectImagesStyle, image);
  });
  setLayoutVisible(true);
};
const handleResponsiveness = ({
  tablet,
  betweenTabletAndBigPhones,
  phones,
  smallPhones,
  ImagesContainer,
  projectImagesLists,
}) => {
  if (tablet) {
    ImagesContainer.gridTemplateColumns = "repeat(2, 1fr)";
    ImagesContainer.height = "3400px";
    ImagesContainer.width = "650px";
  }
  if (betweenTabletAndBigPhones) {
    ImagesContainer.width = "450px";
    ImagesContainer.gridTemplateColumns = "repeat(1, 1fr)";
    projectImagesLists.gridColumnEnd = "auto";
    ImagesContainer.height = "4300px";
  }
  if (phones) {
    ImagesContainer.width = "320px";
    ImagesContainer.height = "3400px";
    projectImagesLists.height = "210px";
    projectImagesLists.gridColumnEnd = "auto";
    ImagesContainer.height = "4400px";
  }
  if (smallPhones) {
    projectImagesLists.height = "150px";
    ImagesContainer.height = "3200px";

    ImagesContainer.width = "210px";
  }
};
const handleImageDisplayPopupResponsiveness = ({
  checkProjectButtonStyles,
  image,
  projectImageContainerStyle,
  projectImageStyle,
  projectCloseButtonStyles,
  tablets,
  phones,
}) => {
  if (image.src.includes("Plenary/6.png")) {
    projectImageContainerStyle.display = "flex";
    projectImageContainerStyle.flexDirection = "column";
    projectImageContainerStyle.alignItems = "center";
    projectImageStyle.objectFit = "cover";
    projectImageStyle.width = "360px";
    projectImageStyle.height = "800px";
    projectImageContainerStyle.width = projectImageStyle.width;
    projectImageContainerStyle.height = projectImageStyle.height;
    projectCloseButtonStyles.marginTop = "3px";
  }

  if (phones && image.src.includes("Plenary/6.png")) {
    checkProjectButtonStyles.fontSize = "11px";

    projectImageStyle.width = "250px";
    projectImageStyle.height = "500px";
    projectImageContainerStyle.width = projectImageStyle.width;
    projectImageContainerStyle.height = projectImageStyle.height;
  }
  if (tablets && !image.src.includes("Plenary/6.png")) {
    projectImageStyle.width = "450px";
    projectImageContainerStyle.width = projectImageStyle.width;
    projectImageStyle.height = "280px";
    projectImageContainerStyle.height = projectImageStyle.height;
  }
  if (phones && !image.src.includes("Plenary/6.png")) {
    checkProjectButtonStyles.fontSize = "11px";
    projectImageStyle.width = "280px";
    projectImageContainerStyle.width = projectImageStyle.width;
    projectImageStyle.height = "150px";
    projectImageContainerStyle.height = projectImageStyle.height;
  }
};

const handleProjectImagesGrid = (image, size, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
};

const exploreProjectsUtils = {
  handleProjectImagesGrid,
  handleImageDisplayPopupResponsiveness,
  handleResponsiveness,
  handleHoverLogic,
  setStyesOnProjectImage,
};
export default exploreProjectsUtils;
