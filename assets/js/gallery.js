const sections = document.querySelectorAll(".section");
const circles = document.querySelectorAll(".circle");

const sectionsArr = Array.from(sections);
const circlesArr = Array.from(circles);
console.log(circlesArr);

sections.forEach((section) => {
  section.addEventListener("click", () => {
    sections.forEach((section) => {
      section.classList.remove("section--selected");
    });
    section.classList.add("section--selected");

    circles.forEach((circle) => {
      circle.classList.remove("circle--active");
    });
    let index = sectionsArr.indexOf(section);
    circlesArr[index].classList.add("circle--active");
  });
});

const sectionsContainer = document.querySelector(".sections-container");
// console.log(sectionsContainer);

let isDragStart = false;
let prevPageX, prevScrollLeft;

sectionsContainer.addEventListener("mousedown", (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = sectionsContainer.scrollLeft;
});

sectionsContainer.addEventListener("mousemove", (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  let postionDiff = e.pageX - prevPageX;
  sectionsContainer.scrollLeft = prevScrollLeft - postionDiff;
});

sectionsContainer.addEventListener("mouseup", () => {
  isDragStart = false;
});
