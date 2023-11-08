import { carousel } from './carousel.js'
import { feedbackForm } from './feedback-form.js'

const hasCarousel = document.querySelector('.carousel');
if (hasCarousel) {
  carousel()
}

let width = window.innerWidth;
window.addEventListener('resize', function () {
  if (window.innerWidth !== width) {
    if (hasCarousel) {
      carousel()
    }
  }
});

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

feedbackForm.getOrCreateInstance('form');

document.addEventListener('itc.successSendForm', (e) => {
  const el = e.target.closest('.form-container').querySelector('.form-success');
  el.classList.remove('form-success_hide');
});

document.querySelector('.form-success__btn').addEventListener('click', (e) => {
  const el = e.target.closest('.form-container').querySelector('form');
  const form = feedbackForm.getOrCreateInstance(el);
  form.reset();
  e.target.closest('.form-container').querySelector('.form-success').classList.add('form-success_hide');
});

export default {
  feedbackForm
}
