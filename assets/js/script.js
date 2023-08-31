const bookBtns = document.querySelectorAll(".btn--book");
const bookingFormContainer = document.querySelector(".modal-container");
const finishModal = document.querySelector(".finish__modal");
const bookingForm = document.querySelector("#booking-form");
const closeBtn = document.querySelector("#close-btn");
const pageBody = document.querySelector("#page");
const finalBtn = document.querySelector(".btn--finish");

const body = document.body;

const inputGroups = document.querySelectorAll(".booking__input__group");
// console.log(inputGroups);
inputGroups.forEach((inputGroup) => {
  inputGroup.addEventListener("focusin", () => {
    inputGroup.classList.add("focus");
  });
});

bookBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    bookingFormContainer.style.display = "block";
    pageBody.classList.add("blur");
    body.style.overflow = "hidden"; // Hide vertical scrollbar

  });
});

window.addEventListener("click", (event) => {
  if (event.target === bookingFormContainer) {
    bookingFormContainer.style.display = "none";
    pageBody.classList.remove("blur");
    body.style.overflow = "auto";
  }
});

closeBtn.addEventListener("click", () => {
  bookingFormContainer.style.display = "none";
  pageBody.classList.remove("blur");
  body.style.overflow = "auto"; // Restore vertical scrollbar
});

// const bookNowBtn = document.querySelector(".booking__footer #booking-btn");
// console.log(bookNowBtn);

bookingForm.addEventListener("submit", (event) => {
  bookingFormContainer.style.display = "none";
  event.preventDefault();
  finishModal.style.display = "flex";
  // console.log(bookingForm.fullName.value);
});

finalBtn.addEventListener("click", () => {
  finishModal.style.display = "none";
  pageBody.classList.remove("blur");
  body.style.overflow = "auto";
});
