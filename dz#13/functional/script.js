const prevButton = document.querySelector(".js--prev");
const nextButton = document.querySelector(".js--next");
const imageElement = document.querySelector(".js--img");
const dotsContainer = document.querySelector(".js--dots");

const images = {
  1: "/img/undergroundBuilding.jpg",
  2: "/img/winterApocalypse.jpg",
  3: "/img/roomInBunker.jpg",
  4: "/img/surveillanceTower.jpg",
};
const totalImages = Object.keys(images).length;

const createDot = (id) => {
  const dot = document.createElement("li");
  dot.id = id;
  return dot;
};

const createDots = () => {
  for (let i = 1; i <= totalImages; i++) {
    const dot = createDot(`pic_${i}`);
    dotsContainer.appendChild(dot);
  }
};

const checkButtonVisibility = () => {
  prevButton.style.visibility = currentSlide === 1 ? "hidden" : "visible";
  nextButton.style.visibility =
    currentSlide === totalImages ? "hidden" : "visible";
};

const highlightDot = () => {
  const currentDot = document.querySelector(`#pic_${currentSlide}`);
  currentDot.classList.add("active");
};

const removeDotHighlight = (direction, slide) => {
  const previousSlide = direction ? slide - 1 : slide + 1;
  const previousDot = document.querySelector(`#pic_${previousSlide}`);
  previousDot.classList.remove("active");
};

const handleNextButtonClick = () => {
  imageElement.src = "." + images[++currentSlide];
  checkButtonVisibility();
  highlightDot();
  removeDotHighlight(true, currentSlide);
};

const handlePrevButtonClick = () => {
  imageElement.src = "." + images[--currentSlide];
  checkButtonVisibility();
  highlightDot();
  removeDotHighlight(false, currentSlide);
};

nextButton.addEventListener("click", handleNextButtonClick);
prevButton.addEventListener("click", handlePrevButtonClick);

const initializeSlider = () => {
  createDots();
  checkButtonVisibility();
  highlightDot();
};

let currentSlide = 1;

initializeSlider();
