/** SJ Home 042225
 * This has the correct animation but doesn't have the responsiveness set up correctly.  
 * 
*/
import "../src/styles/style.css";
// import { gsap } from "gsap";
// import { GSDevTools } from "gsap/GSDevTools"; 
import sj_menu from './sj_menu.js'
sj_menu()

import colorModeToggle from './color_mode_toggle.js'

// Register ALL plugins
// gsap.registerPlugin(ScrollTrigger, GSDevTools); 
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(GSDevTools)
gsap.registerPlugin(Flip)


function small_joys_home() {
  console.log("small_joys_home.js is working");
  
  // Store references to elements and their original parents
  let originalElements = new Map();
  
  // Store ScrollTrigger instances
  let scrollTriggers = {
    initFlipIconAnimation: null,
    logoToNav: null,
    buttonAppear: null
  };

  // Initialize everything
  function init() {
    console.log("small_joys_home init function is working");
    initDevTools();
    initGridAnimation();
    initFlipIconAnimation();
    initLogoToNavAnimation();
    initButtonAnimation();
  }
  
  function initDevTools() {
    const devTools = document.querySelector(".gs-dev-tools");
    if (devTools) devTools.style.zIndex = "100";
  }
  
  function initGridAnimation() {
    let tl_ap_grid = gsap.from("html", { duration: 0, autoAlpha: 0});
    tl_ap_grid.play();
  }

  function initFlipIconAnimation() {
    // Get elements
    let sj_banner_1_icon_group_icon_1 = document.querySelector("#sj_banner_icon_group");
    let sj_target_container_icon_group_process_section = document.querySelector("#sj_target_container_icon_group_process_section");
    let sj_target_container_icon_group_contact_section = document.querySelector("#sj_target_container_icon_group_contact_section");
    // let ap_grid_container_sj_process_section_1 = document.querySelector(".ap_grid_container.sj_process_section_1");
    let ap_grid_container_sj_contact_section_1 = document.querySelector(".ap_grid_container.sj_contact_section_1");
    let sj_target_container_icon_group = document.querySelector("#sj_target_container_icon_group_contact_section")

    let small_joys_home = document.querySelector(".small_joys_home");

    // Store original parent
    if (!originalElements.has(sj_banner_1_icon_group_icon_1)) {
      // originalElements.set(sj_banner_1_icon_group_1, sj_banner_1_icon_group_1.parentElement);
    const origin = document.querySelector(".sj_banner_1_icon_group_origin");
    if (origin) {
      originalElements.set(sj_banner_1_icon_group_icon_1, origin);
}

    }
    console.log("sj_banner_1_icon_group_1.parentElement:", sj_banner_1_icon_group_icon_1.parentElement)
    console.log("sj_banner_1_icon_group_1:", sj_banner_1_icon_group_icon_1);


    // Store original parent for reset purposes if not already stored
    if (!originalElements.has(sj_banner_1_icon_group_icon_1)) {
      originalElements.set(sj_banner_1_icon_group_icon_1, sj_banner_1_icon_group_icon_1.parentElement);
    }

    // 2. Get the initial state BEFORE any DOM changes
    // const state = Flip.getState(sj_banner_1_header_text_line_1);
    const state_sj_banner_1_icon_group_icon_1 = Flip.getState(sj_banner_1_icon_group_icon_1);

    // 3. Then make your DOM changes
    // Select the target container
    // const targetContainer_sj_banner_1_subheader_container = sj_banner_1_subheader_container;
    const targetContainer_sj_target_container_icon_group = sj_target_container_icon_group;
    // append the element
    // targetContainer_sj_banner_1_subheader_container.appendChild(sj_banner_1_icon_group_icon_1);
    targetContainer_sj_target_container_icon_group.appendChild(sj_banner_1_icon_group_icon_1);

    // Create a timeline variable to hold your animation (don't execute it yet)
    let tl_flip_icon_group = gsap.timeline();
    
    // 4. Finally, animate from the initial state to the new state
    // in this case, i'm also adding it to the tl_flip_icon_group timeline
    tl_flip_icon_group.add(
      Flip.from(state_sj_banner_1_icon_group_icon_1, {
        duration: 5,
        ease: "power1.inOut",
        absolute: true
      })
    )

    // elements for scrolltrigger
    let ap_grid_container_sj_process_section_1 = document.querySelector(".ap_grid_container.sj_process_section_1");

    // create scrolltrigger fo icon group flip
    ScrollTrigger.create({
      trigger: small_joys_home,
      start:"top 0%",
      end:"bottom 100%",
      // markers: true,
      ease: "power1.in",
      // on enter, on leave, on enter back, on leave back
      // toggleActions:"play none none reverse",
      animation: tl_flip_icon_group,
      scrub: true
    })
  }

  function initLogoToNavAnimation() {
    // Get elements
    let ap_grid_container_sj_process_section_1 = document.querySelector(".ap_grid_container.sj_process_section_1");
    let sj_banner_1_header_text = document.querySelectorAll(".sj_banner_1_header_text");
    let sj_banner_1_header_text_wrapper = document.querySelector(".sj_banner_1_header_text_wrapper");
    
    // Create tweens
    let tween_smaller_sj_banner_1_header_text = gsap.to(sj_banner_1_header_text, {
      fontSize: "16px",
      lineHeight: "20px",
      ease: "none",
    });

    let tween_gap_sj_banner_1_header_text = gsap.to(sj_banner_1_header_text_wrapper, {
      rowGap: "2px",
      ease: "none",
    });
    
    // Create timeline
    let tl_logo_to_nav = gsap.timeline();
    tl_logo_to_nav
      .add(tween_smaller_sj_banner_1_header_text)
      .add(tween_gap_sj_banner_1_header_text, "<");

    // Create ScrollTrigger for logo to nav
    scrollTriggers.logoToNav = ScrollTrigger.create({
      id: "logoToNavAnimation",
      trigger: ap_grid_container_sj_process_section_1,
      start: "top 100%",
      end: "top 0%",
      // markers: true,
      animation: tl_logo_to_nav,
      scrub: 0.5,
      invalidateOnRefresh: true,
      fastScrollEnd: true
    });
  }

  function initButtonAnimation() {
    // Get elements
    let sj_1_button_1_sticky_nav = document.querySelector("#sj_1_button_1_sticky_nav");
    let sj_grid_container_nav_1_sticky_nav = document.querySelector(".sj_grid_container.nav_1.sticky_nav");
    
    // Create tween
    let tween_sj_1_button_1_sticky_nav = gsap.from(sj_1_button_1_sticky_nav, {
      opacity: "0",
      duration: 1
    });

    // Create ScrollTrigger
    scrollTriggers.buttonAppear = ScrollTrigger.create({
      id: "buttonAppearAnimation",
      trigger: sj_grid_container_nav_1_sticky_nav,
      start: "top 0%",
      end: "top 100px",
      toggleActions: "play none none reverse",
      animation: tween_sj_1_button_1_sticky_nav
    });
  }

  // Kill only specific animations and reset specific elements
  function killFlipIconAnimation() {
    // Kill ScrollTriggers
    if (scrollTriggers.initFlipIconAnimation) {
      scrollTriggers.initFlipIconAnimation.kill();
      scrollTriggers.initFlipIconAnimation = null;
    }
    
    // Reset element to original position
    let sj_banner_1_icon_group_1 = document.querySelector("#w-node-_0b70cb18-2388-89ef-fff0-75b7f977beda-c738a86b");
    if (sj_banner_1_icon_group_1 && originalElements.has(sj_banner_1_icon_group_1)) {
      const originalParent = originalElements.get(sj_banner_1_icon_group_1);
      if (originalParent && sj_banner_1_icon_group_1.parentElement !== originalParent) {
        originalParent.appendChild(sj_banner_1_icon_group_1);
        gsap.set(sj_banner_1_icon_group_1, { clearProps: "all" });
      }
    }
    
    // Reinitialize
    setTimeout(() => {
      initFlipIconAnimation();
    }, 50);
  }

  // This function only kills and resets the flip icon animation
  function resetFlipIconOnly() {
    // killFlipIconAnimation();
  }

  // Make functions available globally for debugging
  window.killFlipIconAnimation = killFlipIconAnimation;
  window.resetFlipIconOnly = resetFlipIconOnly;

  // Debounce function for resize events
  function debounce(func) {
    var timer;
    return function(event) {
      if(timer) clearTimeout(timer);
      timer = setTimeout(func, 300, event);
    }
  }

  // Handle resize - only reset the flip icon animation
  window.addEventListener("resize", debounce(function(e) {
    console.log("end of resizing - resetting flip icon only");
    resetFlipIconOnly();
  }));

  // Initialize everything once the page has fully loaded
  window.addEventListener("load", function (event) {
    init();
  });
}

// Only run the code if we're on the correct page
if (document.body.classList.contains("small_joys_home")) {
  small_joys_home();
}

export default small_joys_home;
