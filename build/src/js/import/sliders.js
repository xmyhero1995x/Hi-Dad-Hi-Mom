import { options} from './options';
import 'swiper/css';
import Swiper from 'swiper';


// Sliders



// if ($('.rd-image-stories__slider').length) {
//   $('.rd-image-stories__slider').slick(options.sliders.imageStoriesSlider);
// }



if (window.matchMedia("(min-width: 390px)").matches) {
  /* the viewport is at least 1440 pixels wide */
  document.querySelectorAll('[data-swiper]').forEach((el) => {
    const swiper = new Swiper(el, options.sliders.home);
      swiper.isEnd

  })
}
