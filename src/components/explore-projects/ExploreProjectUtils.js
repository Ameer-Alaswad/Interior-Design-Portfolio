export const setStyesOnProjectImage = (styles, element) => {
  Object.assign(element.style, styles);
};
export const handleHoverLogic = (
  e,
  onHoverClass,
  noneHoveredProjectImagesStyle
) => {
  const imagesList = e.target.parentNode.parentNode.children;
  [...imagesList].map((imageList) => {
    const image = imageList.children[0];
    const hoveredImage = e.target;
    if (image === hoveredImage)
      return setStyesOnProjectImage(onHoverClass, hoveredImage);
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
