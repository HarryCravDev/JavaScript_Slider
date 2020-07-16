export default class Slider {
  constructor({
    sliderSelector = ".slider",
    sliderContainerSelector = ".slider_container",
    previousSelector = ".previous",
    nextSelector = ".next",
    transitionTime = 3000,
  } = {}) {
    this.slider = document.querySelector(sliderSelector);
    this.slides = document.querySelectorAll(
      `${sliderContainerSelector} img`
    ).length;
    this.sliderContainer = document.querySelector(sliderContainerSelector);
    this.prevBtn = document.querySelector(previousSelector);
    this.nextBtn = document.querySelector(nextSelector);
    this.slideSize = this.slider.offsetWidth;
    this.currentSlide = 0;

    this.setEventListener();
  }

  moveSlides = () => {
    this.sliderContainer.style.transform = `translateX(-${
      this.currentSlide * this.slideSize
    }px)`;
  };

  nextSlide = () => {
    this.currentSlide =
      this.currentSlide >= this.slides - 1 ? 0 : this.currentSlide + 1;
    this.moveSlides();
  };

  prevSlide = () => {
    this.currentSlide =
      this.currentSlide <= 0 ? this.slides - 1 : this.currentSlide - 1;
    this.moveSlides();
  };

  setEventListener = () => {
    this.prevBtn.addEventListener("click", this.prevSlide);
    this.nextBtn.addEventListener("click", this.nextSlide);
  };
}
