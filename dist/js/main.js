const carouselTitles = document.querySelector(".carousel-titles").children;
console.log(carouselTitles);
const titleElements = Array.from(carouselTitles);
titleElements.forEach(element => {
  element.addEventListener("click", () => {
    titleElements.forEach(titleElement => {
      titleElement.classList.remove("active");
    });
    element.classList.add("active");
  });
});
