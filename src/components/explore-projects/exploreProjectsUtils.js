const setStyesOnProjectImage = (styles, element, e) => {
  Object.assign(element.style, styles);
};
const handleHoverLogic = (
  e,
  onHoverClass,
  noneHoveredProjectImagesStyle,
  setLayoutVisible
) => {
  const imagesList = e.target.parentNode.parentNode.children;
  [...imagesList].map((imageList) => {
    const image = imageList.children[0];
    let hoveredImage = e.target;
    imageList.style.zIndex = "3";
    image.style.opacity = "0.5";
    if (image === hoveredImage) {
      hoveredImage = hoveredImage.parentNode;
      e.target.style.opacity = "1";
      return setStyesOnProjectImage(onHoverClass, hoveredImage, imageList);
    }
    setStyesOnProjectImage(noneHoveredProjectImagesStyle, image);
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
const handleImageDisplayPopupResponsiveness = (
  checkProjectButtonStyles,
  image,
  imageContainerStyle,
  imageStyles,
  closeProjectButtonStyles,
  matches2,
  matches
) => {
  if (image.src.includes("Plenary/6.png")) {
    imageContainerStyle.display = "flex";
    imageContainerStyle.flexDirection = "column";
    imageContainerStyle.alignItems = "center";
    imageStyles.objectFit = "cover";
    imageStyles.width = "360px";
    imageStyles.height = "800px";
    imageContainerStyle.width = imageStyles.width;
    imageContainerStyle.height = imageStyles.height;
    closeProjectButtonStyles.marginTop = "3px";
  }

  if (matches2 && image.src.includes("Plenary/6.png")) {
    checkProjectButtonStyles.fontSize = "11px";

    imageStyles.width = "250px";
    imageStyles.height = "500px";
    imageContainerStyle.width = imageStyles.width;
    imageContainerStyle.height = imageStyles.height;
  }
  if (matches && !image.src.includes("Plenary/6.png")) {
    imageStyles.width = "450px";
    imageContainerStyle.width = imageStyles.width;
    imageStyles.height = "280px";
    imageContainerStyle.height = imageStyles.height;
  }
  if (matches2 && !image.src.includes("Plenary/6.png")) {
    checkProjectButtonStyles.fontSize = "11px";
    imageStyles.width = "280px";
    imageContainerStyle.width = imageStyles.width;
    imageStyles.height = "150px";
    imageContainerStyle.height = imageStyles.height;
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
