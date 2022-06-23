export const setStyesOnProjectImage = (styles, element, imageList) => {
  Object.assign(element.style, styles);
};
export const handleHoverLogic = (
  e,
  onHoverClass,
  noneHoveredProjectImagesStyle,
  setLayoutVisible,
  projectImagesLists
) => {
  const imagesList = e.target.parentNode.parentNode.children;
  [...imagesList].map((imageList) => {
    // console.log(imageList.children[0]);
    const image = imageList.children[0];
    let hoveredImage = e.target;
    // image.style.zIndex = "5";
    imageList.style.zIndex = "9";
    image.style.opacity = "0.5";
    if (image === hoveredImage) {
      hoveredImage = hoveredImage.parentNode;
      e.target.style.opacity = "1";
      return setStyesOnProjectImage(onHoverClass, hoveredImage, imageList);
    }
    setStyesOnProjectImage(noneHoveredProjectImagesStyle, image);
  });
};
export const handleResponsiveness = (
  matches,
  matches2,
  matches3,
  matches4,
  listStyle,
  projectImagesLists
) => {
  if (matches) {
    listStyle.gridTemplateColumns = "repeat(2, 1fr)";
    listStyle.height = "3400px";
    listStyle.width = "650px";
  }
  if (matches2) {
    listStyle.width = "450px";
    listStyle.gridTemplateColumns = "repeat(1, 1fr)";
    projectImagesLists.gridColumnEnd = "auto";
    listStyle.height = "4300px";
  }
  if (matches3) {
    listStyle.width = "320px";
    listStyle.height = "3400px";

    projectImagesLists.height = "210px";
    projectImagesLists.gridColumnEnd = "auto";
    listStyle.height = "4400px";
  }
  if (matches4) {
    projectImagesLists.height = "150px";
    listStyle.height = "3200px";

    listStyle.width = "210px";
  }
};
export const handleImageDisplayPoupupResponsiveness = (
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
    imageStyles.width = "280px";
    imageContainerStyle.width = imageStyles.width;
    imageStyles.height = "150px";
    imageContainerStyle.height = imageStyles.height;
  }
};
