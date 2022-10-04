import { options } from './import/options';
import "./import/sliders";
import {
  // embedYoutube,
  // accordionMenu,
  // setFullHeight,
  // fillInput,
  // expander,
  // scrollTo,
  // scrollHeader,
  // selector,
  // openTab,
  // showMenu,
  // setProgress,
  scrollHeader,
  // setIntersectionObserver,
  // setAspectRatioVideo,
  // Modal,
  // Timer,
  // customCursor,
} from './import/helpers';

class App {
  constructor() {
    const PATH = '/MBA-kids'
    $('#svg-sprites').load(`${PATH}/imgs/stack/sprite.svg`);
    this.addEventListeners();
    // embedYoutube();
    this.initPhrase = 'App init';



    const headerMenu = document.querySelector('.page-header__nav');
    const hamburgerMenu = document.querySelector('.hamburger');
    hamburgerMenu.addEventListener('click', () => {
      headerMenu.classList.toggle('is-open');
    })
  }

  addEventListeners() {
    $(window).on('scroll', () => {
      scrollHeader();
    });

    $(window).on('load', () => {
      // End Loader prod
      console.log('App init\n');
    });

    $(window).on('resize', () => {
      // setFullHeight();
    });

    // Elements events
    // $('.to-top, a[href^=\'#sec\']').on('click', scrollTo);
    // $('#nav-toggle').on('click', () => showMenu());
    // $('.accordion__title').on('click', accordionMenu);
  }

  init() {
    // eslint-disable-next-line
    if (DEBUG) {
      // eslint-disable-next-line
      console.log(this.initPhrase, options.body);
    }
  }
}

const APP = new App();
APP.init();
