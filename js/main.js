const titleElements = Array.from(
  document.querySelector(".carousel-titles").children
);
const carouselItems = Array.from(
  document.querySelector(".carousel-items").children
);

function getElementName(element) {
  let specificClassName = element.classList[1];
  let splitClassName = specificClassName.split("-")[1];
  return splitClassName;
}

function findNameInCarouselItems(name) {
  carouselItems.forEach(carouselItem => {
    if (carouselItem.classList[0].split("-")[1] == name) {
      carouselItem.classList.add("visible");
    } else {
      carouselItem.classList.remove("visible");
    }
  });
}

titleElements.forEach(element => {
  element.addEventListener("click", () => {
    titleElements.forEach(titleElement => {
      titleElement.classList.remove("active");
    });
    element.classList.add("active");
    const name = getElementName(element);
    findNameInCarouselItems(name);
    console.log(name);
  });
});

document.querySelector(".a-smart").click();
