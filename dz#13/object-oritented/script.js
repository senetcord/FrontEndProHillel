class ReusableSlider {
  constructor(
    prevButtonSelector,
    nextButtonSelector,
    imageElementSelector,
    dotsContainerSelector,
    // ID
    dotsContainerId,
    images
  ) {
    this.prevButton = document.querySelector(prevButtonSelector);
    this.nextButton = document.querySelector(nextButtonSelector);
    this.imageElement = document.querySelector(imageElementSelector);
    this.dotsContainer = document.querySelector(dotsContainerSelector);

    this.images = images;
    this.totalImages = Object.keys(this.images).length;

    this.dotsContainerId = dotsContainerId;

    for (let i = 1; i <= this.totalImages; i++) {
      const dot = document.createElement("li");
      dot.id = `${this.dotsContainerId}_pic_${i}`;
      this.dotsContainer.appendChild(dot);
    }

    this.currentSlide = 1;

    this.checkButtonVisibility();
    this.highlightDot();

    this.nextButton.addEventListener(
      "click",
      this.handleNextButtonClick.bind(this)
    );
    this.prevButton.addEventListener(
      "click",
      this.handlePrevButtonClick.bind(this)
    );
  }

  checkButtonVisibility() {
    this.prevButton.style.visibility =
      this.currentSlide === 1 ? "hidden" : "visible";
    this.nextButton.style.visibility =
      this.currentSlide === this.totalImages ? "hidden" : "visible";
  }

  highlightDot() {
    const currentDot = document.querySelector(
      `#${this.dotsContainerId}_pic_${this.currentSlide}`
    );
    currentDot.classList.add("active");
  }

  removeDotHighlight(direction, slide) {
    const previousSlide = direction ? slide - 1 : slide + 1;
    const previousDot = document.querySelector(
      `#${this.dotsContainerId}_pic_${previousSlide}`
    );
    previousDot.classList.remove("active");
  }

  handleNextButtonClick() {
    this.imageElement.src = "." + this.images[++this.currentSlide];
    this.checkButtonVisibility();
    this.highlightDot();
    this.removeDotHighlight(true, this.currentSlide);
  }

  handlePrevButtonClick() {
    this.imageElement.src = "." + this.images[--this.currentSlide];
    this.checkButtonVisibility();
    this.highlightDot();
    this.removeDotHighlight(false, this.currentSlide);
  }
}

const images = {
  1: "/img/undergroundBuilding.jpg",
  2: "/img/winterApocalypse.jpg",
  3: "/img/roomInBunker.jpg",
  4: "/img/surveillanceTower.jpg",
};

const images2 = {
  1: "/img/undergroundBuilding.jpg",
  2: "/img/winterApocalypse.jpg",
  3: "/img/roomInBunker.jpg",
  4: "/img/surveillanceTower.jpg",
  5: "/img/bonus.jpg",
};

const imageSlider = new ReusableSlider(
  ".js--prev",
  ".js--next",
  ".js--img",
  ".js--dots",
  "one",
  images
);

const secondImageSlider = new ReusableSlider(
  ".js--prev2",
  ".js--next2",
  ".js--img2",
  ".js--dots2",
  "two",
  images2
);
