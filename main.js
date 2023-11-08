import { carousel } from './carousel'
import { feedbackForm } from './feedback-form'

const hasCarousel = document.querySelector('.carousel');
if (hasCarousel) {
  carousel()
}

function smoothScroll(event) {
  event.preventDefault();

  const href = this.getAttribute("href");

  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });

}
let link = document.querySelector('.toForm');
link.addEventListener("click", smoothScroll);

export default {
  feedbackForm
}
