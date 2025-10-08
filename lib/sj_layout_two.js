/**
 * no animations
 */

import '../src/styles/style.css'
import { gsap } from 'gsap'
// import { SplitText } from 'gsap/SplitText'
// import sj_menu from './sj_menu.js';
// sj_menu();

import sj_navbar_blur from './sj_navbar_blur.js';


// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// gsap.registerPlugin(SplitText)
// gsap.registerPlugin(GSDevTools)
gsap.registerPlugin(ScrollTrigger);


function sj_layout_two() {
  console.log('sj_layout_two.js is working')

  function init() {

    console.log('sj_layout_two init function is working')

    gsap.from("html", {duration: 0, autoAlpha:0})
    
    const swiper_1 = new Swiper(".swiper-marquee", {
      modules: [Autoplay], 
      // swiper will use the width we define in Webflow if we do auto. 
      slidesPerView: 'auto',
      spaceBetween: 60, 
      // loop to true makes it infinite marquee.
      loop: true, 
      speed: 4000,
      // can't interact w things in slider
      allowTouchMove: false,
      // prevent jumping during loop transitions
      // loopAdditionalSlides: 2,
      // smoother transitions
      freeMode: true,
      freeModeMomentum: false,
      // for infinite marquee
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        reverseDirection: true
      },
      // responsive breakpoints
      breakpoints: {
        768: {
          spaceBetween: 90
        },
        992: {
          spaceBetween: 120
        }
      }
    })

    const swiper_2 = new Swiper(".swiper-marquee_2", {
      modules: [Autoplay], 
      // swiper will use the width we define in Webflow if we do auto. 
      slidesPerView: 'auto',
      spaceBetween: 60, 
      // loop to true makes it infinite marquee.
      loop: true, 
      speed: 4000,
      // can't interact w things in slider
      allowTouchMove: false,
      // prevent jumping during loop transitions
      // loopAdditionalSlides: 2,
      // smoother transitions
      freeMode: true,
      freeModeMomentum: false,
      // for infinite marquee
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        reverseDirection: false
      },
      // responsive breakpoints
      breakpoints: {
        768: {
          spaceBetween: 90
        },
        992: {
          spaceBetween: 120
        }
      }
    })
    

    
  }

  // Initialize with proper timing
  let hasInitialized = false;

  const initializeOnce = () => {
    if (hasInitialized) {
      console.log('Already initialized, skipping...');
      return;
    }
    hasInitialized = true;

    console.log('🚀 initializeOnce called');
    console.log('Document ready state:', document.readyState);

    // Small delay to ensure layout is stable
    setTimeout(() => {
      console.log('🎬 Calling init()...');
      init();
    }, 50);
  };

  // Use DOMContentLoaded for faster initialization
  console.log('Adding DOMContentLoaded listener, current state:', document.readyState);
  if (document.readyState === 'loading') {
    window.addEventListener("DOMContentLoaded", initializeOnce);
  } else {
    console.log('DOM already loaded, calling initializeOnce immediately');
    initializeOnce();
  }

  // Fallback for compatibility
  window.addEventListener("load", initializeOnce);
}

// Only run the code if we're on the correct page
console.log('Script loaded, checking for sj_layout_two class...');
console.log('Body classes:', document.body.className);
console.log('Has sj_layout_two class:', document.body.classList.contains("sj_layout_two"));
console.log('Document ready state:', document.readyState);

if (document.body.classList.contains('sj_layout_two')) {
  console.log('✅ sj_layout_two class found, initializing...');
  sj_layout_two();
} else {
  console.warn('❌ sj_layout_two class NOT found on body element');
}

export default sj_layout_two
