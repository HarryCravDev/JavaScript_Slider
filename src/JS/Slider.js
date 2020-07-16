export default class Slider {
  constructor({
    sliderSelector = ".slider",
    sliderContainerSelector = ".slider_container",
    previousSelector = ".previous",
    nextSelector = ".next",
    transitionTime = 3000,
  }) {
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

  moveSlides() {}

  setEventListener() {}
}
