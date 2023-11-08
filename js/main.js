import { carousel } from './carousel.js'
import { feedbackForm } from './feedback-form.js'

const hasCarousel = document.querySelector('.carousel');
if (hasCarousel) {
  carousel()
}

// const hasFeedbackForm = document.querySelector('#feedback-form');
// if (hasFeedbackForm) {
//   feedbackForm()
// }

function smoothScroll(event) {
  event.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });

}
let link = document.querySelector('.toForm');
if (link) {
  link.addEventListener("click", smoothScroll);
}

export default {
  feedbackForm
}
