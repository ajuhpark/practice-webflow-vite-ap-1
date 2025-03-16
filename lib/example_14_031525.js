/** Marquee Scroll */

import "../src/styles/style.css";
// import { gsap } from "gsap";
// import { GSDevTools } from "gsap/GSDevTools"; 

// Register ALL plugins
// gsap.registerPlugin(ScrollTrigger, GSDevTools); 
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(GSDevTools)


function example_14() {
  console.log("example_14.js is working");

  function init() {
    console.log("example_14 init function is working");


    let tl_ap_grid = gsap.from("html", { duration: 0, autoAlpha: 0}, 'tl_ap_grid');

    // NAV TIMELINE - BANNER 1
    let banner_1 = document.querySelector(".ap_grid_container.banner_1");

    let sjs_logo_image_banner_1 = banner_1.querySelector(".sjs_logo_image");
    let sjs_logo_text_banner_1 = banner_1.querySelector(".sjs_logo_text");

    if (!sjs_logo_image_banner_1) {
      console.warn("❌ #sjs_logo_image_banner_1 not found in the DOM");
    } else {
      console.log(
        "✅ #sjs_logo_image_banner_1 found:",
        sjs_logo_image_banner_1
      );
    }

    let sjs_banner_1_nav = document.querySelector(".sjs_nav");
    let sjs_banner_1_nav_content_right = banner_1.querySelector(".sjs_nav_content_right")

    let sjs_banner_1_image = banner_1.querySelector(".sjs_banner_1_image")
    let sjs_banner_1_image_image = banner_1.querySelector(".sjs_banner_1_image_image")
    let sjs_banner_1_image_container = banner_1.querySelector(".sjs_banner_1_image_container")

    // banner_1 content - including splitText word animation - variables
    let sjs_banner_1_header = banner_1.querySelector(".sjs_banner_header")
    let sjs_banner_1_header_splitLines = new SplitText(sjs_banner_1_header, {type: "lines", linesClass:"line"})
    let sjs_banner_1_subheader = banner_1.querySelector(".sjs_banner_subheader")
    let sjs_banner_1_subheader_splitLines = new SplitText(sjs_banner_1_subheader, {type: "lines", linesClass:"line"})

    // Function to wrap split lines in containers
    function wrapLinesInContainers(splitTextInstance) {
      splitTextInstance.lines.forEach(line => {
        // Create a wrapper div
        const wrapper = document.createElement('div');
        wrapper.className = 'line-wrapper';
        wrapper.style.position = 'relative';
        wrapper.style.overflow = 'hidden';
        
        // Get the parent of the line
        const parent = line.parentNode;
        
        // Insert the wrapper before the line in the DOM
        parent.insertBefore(wrapper, line);
        
        // Move the line into the wrapper
        wrapper.appendChild(line);
        
        // Set the line to relative position
        line.style.position = 'relative';
        line.style.top = '0';
        line.style.left = '0';
      });
    }

    // Apply the wrapping to both header and subheader split lines
    wrapLinesInContainers(sjs_banner_1_header_splitLines);
    wrapLinesInContainers(sjs_banner_1_subheader_splitLines);

    let sjs_banner_1_content = document.querySelector(".sjs_banner_1_content");
    let sjs_banner_1_content_button = banner_1.querySelector(".sjs_button")
    
    let tl_banner_1 = gsap.timeline({id: "tl_banner_1", paused: true})
    .from(sjs_logo_image_banner_1, {
      // Change background color to blue
      // backgroundColor: "blue",
      y: "110%",
      ease: "power2.out",
      duration: 0.8,
      delay:1,
      onStart: () =>
        console.log("🟢 GSAP started animating #sjs_logo_image_banner_1"),
      onComplete: () =>
        console.log("✅ Animation completed for #sjs_logo_image_banner_1"),
    }, 'tl_banner_1')
    .from(sjs_logo_text_banner_1, {
      y: "110%", 
      ease: "power2.out", 
      duration: 0.8
    }, 'tl_banner_1+=0.4')
    // this gets all the content inside of nav_content_right
    .from (sjs_banner_1_nav_content_right.children, {
      y:"100%",
      duration: 0.8, 
      stagger: 0.3, 
      ease: "power2.out"
    }, 'tl_banner_1+=0.8')

    // image overlay animation
    .from(sjs_banner_1_image_container, {
      xPercent: -112,
      ease: 'power1.out',
      duration: 1.5,
    }, 'tl_banner_1+=0.6')
    .from(sjs_banner_1_image_image, {
      xPercent: 112,
      scale:1.1,
      ease: 'power1.out',
      duration: 1.5,
    }, 'tl_banner_1+=0.6')

    // banner content animation
    .from(sjs_banner_1_header_splitLines.lines, {
      yPercent:110, 
      duration:1, 
      // opacity:0,
      stagger: 0.1,
      ease: 'sine.out',
    }, 'tl_banner_1+=1.4')
    .from(sjs_banner_1_subheader_splitLines.lines, {
      yPercent:110, 
      duration:1, 
      // opacity:0,
      stagger: 0.1,
      ease: 'sine.out',
    }, '<0.2')
    .from(sjs_banner_1_content_button, {
      yPercent:110, 
      duration:1, 
      // opacity:0,
      ease: 'sine.out',
    }, '<0.2')


    // // scrolltrigger animation
    // ScrollTrigger.create({
    //   trigger: sjs_nav,
    //   start: "top 90%",
    //   end: "top 50%",
    //   markers: true,
    //   animation: tl_banner_1,
    //   // scrub: 1,
    // });



    // NAV TIMELINE - BANNER 2
    let banner_2 = document.querySelector(".ap_grid_container.banner_2");

    let sjs_logo_image_banner_2 = banner_2.querySelector(".sjs_logo_image");
    let sjs_logo_text_banner_2 = banner_2.querySelector(".sjs_logo_text");

    let sjs_banner_2_nav_content_right = banner_2.querySelector(".sjs_nav_content_right")

    // console.log("banner_2:", banner_2);
    // console.log("sjs_logo_image_banner_2:", sjs_logo_image_banner_2);
    // console.log("sjs_logo_text_banner_2:", sjs_logo_text_banner_2);
    console.log("sjs_banner_2_nav_content_right:", sjs_banner_2_nav_content_right);
    console.log("sjs_banner_1_nav_content_right:", sjs_banner_1_nav_content_right);

    // let sjs_banner_2_image = banner_2.querySelector(".sjs_banner_2_image")
    let sjs_banner_2_image_image = banner_2.querySelector(".sjs_banner_2_image_image")
    // let sjs_banner_2_image_container = banner_2.querySelector(".sjs_banner_2_image_container")

    // banner_2 content - including splitText word animation - variables
    let sjs_banner_2_header = banner_2.querySelector(".sjs_banner_header")
    let sjs_banner_2_header_splitLines = new SplitText(sjs_banner_2_header, {type: "lines", linesClass:"line"})
    let sjs_banner_2_subheader = banner_2.querySelector(".sjs_banner_subheader")
    let sjs_banner_2_subheader_splitLines = new SplitText(sjs_banner_2_subheader, {type: "lines", linesClass:"line"})

    // Apply the wrapping to both header and subheader split lines
    wrapLinesInContainers(sjs_banner_2_header_splitLines);
    wrapLinesInContainers(sjs_banner_2_subheader_splitLines);

    let sjs_banner_2_content = document.querySelector(".sjs_banner_2_content");
    let sjs_banner_2_content_button = banner_2.querySelector(".sjs_button")
    console.log("sjs_banner_2_content_button:", sjs_banner_2_content_button);


    let tl_banner_2 = gsap.timeline({id: "tl_banner_2", paused: true})
    .from(sjs_logo_image_banner_2, {
      // Change background color to blue
      // backgroundColor: "blue",
      opacity: 0,
      ease: "power2.out",
      duration: 0.8,
      delay:1
    }, 'tl_banner_2')
    .from(sjs_logo_text_banner_2, {
      opacity: 0,
      ease: "power2.out", 
      duration: 0.8
    }, 'tl_banner_2+=0.4')
    // this gets all the content inside of nav_content_right
    .from (sjs_banner_2_nav_content_right.children, {
      opacity: 0,
      duration: 0.8, 
      stagger: 0.3, 
      ease: "power2.out"
    }, 'tl_banner_2+=0.8')

    // image animation
    .from(sjs_banner_2_image_image, {
      opacity:0,
      scale:1.1,
      ease: 'power1.out',
      duration: 1.5,
    }, 'tl_banner_2+=0.6')

    // banner content animation
    .from(sjs_banner_2_header_splitLines.lines, {
      // yPercent:110, 
      duration:1, 
      opacity:0,
      stagger: 0.1,
      ease: 'Power4.easeInOut',
    }, 'tl_banner_2+=1.4')
    .from(sjs_banner_2_subheader_splitLines.lines, {
      // yPercent:110, 
      duration:1, 
      opacity:0,
      stagger: 0.1,
      ease: 'Power4.easeInOut',
    }, '<0.2')
    .from(sjs_banner_2_content_button, {
      // yPercent:110, 
      duration:1, 
      opacity:0,
      ease: 'Power4.easeInOut',
    }, '<0.2')


    // // scrolltrigger animation
    // ScrollTrigger.create({
    //   trigger: sjs_nav,
    //   start: "top 90%",
    //   end: "top 50%",
    //   markers: true,
    //   animation: tl_banner_2,
    //   // scrub: 1,
    // });


    let mainTimeline = gsap.timeline();
    mainTimeline.add(gsap.from("html", { duration: 0, autoAlpha: 0 }, 'tl_ap_grid'));

    mainTimeline.add(() => {
      // tl_ap_grid.play();
      tl_banner_1.play();
      tl_banner_2.play();
    });
    
    mainTimeline.play();


    // Add GSDevTools here (before the marquee code)
    GSDevTools.create({
      timelines: {
        "Banner 1": tl_banner_1,
        "Banner 2": tl_banner_2
      }
    });



    // gsap.to(sjs_logo_text_banner_1, { y: "100%", duration: 2 });
    // GSDevTools.create();

    // Get all marquees instead of just the first one using querySelectorAll
    // This is the key fix - we need to select ALL marquees, not just the first one
    const sjs_marquees = document.querySelectorAll(".sjs_marquee");
    console.log(`Found ${sjs_marquees.length} marquees`);

    // If no marquees exist, exit function to prevent errors
    if (!sjs_marquees.length) {
      return;
    }

    // Create an array to store all the tweens so we can reference them later if needed
    const tweens = [];

    // Loop through each marquee element to set up animations individually
    sjs_marquees.forEach((sjs_marquee, index) => {
      // Get the first child of the marquee, which contains the content to animate
      const sjs_marquee_content = sjs_marquee.firstChild;
      if (!sjs_marquee_content) {
        return; // Skip this iteration if there's no content
      }

      // Clone the content to create an infinite scroll effect
      // We need two copies of the content to create a seamless loop
      const sjs_marquee_content_clone = sjs_marquee_content.cloneNode(true);
      sjs_marquee.append(sjs_marquee_content_clone);

      // Initialize tween variable for this specific marquee instance
      let sjs_tween;

      // Function to create or recreate the marquee animation
      const playMarquee = () => {
        // If the tween already exists, store its progress so we can resume from same position
        // This prevents the animation from resetting during window resize
        let sjs_progress = sjs_tween ? sjs_tween.progress() : 0;

        // Kill existing tween before creating a new one (prevents animation duplicates)
        sjs_tween && sjs_tween.progress(0).kill();

        // Calculate the width of the content element
        // This needs to be recalculated on resize to ensure proper animation
        const sjs_width = parseInt(
          getComputedStyle(sjs_marquee_content).getPropertyValue("width"),
          10
        );

        // Get the gap between elements (used in the calculation for smooth animation)
        const sjs_gap = parseInt(
          getComputedStyle(sjs_marquee_content).getPropertyValue("column-gap"),
          10
        );

        // Calculate how far to move the elements (negative value to move left)
        // We move exactly the width + gap to create a perfect loop
        const distanceToTranslate = -1 * (sjs_gap + sjs_width);

        // Create the GSAP animation for this marquee
        // fromTo lets us define both start and end positions
        sjs_tween = gsap.fromTo(
          sjs_marquee.children, // Animate both the original and cloned content
          { x: 0 }, // Start position
          {
            x: distanceToTranslate, // End position
            duration: 20, // Animation time in seconds
            ease: "none", // Linear movement (no easing)
            repeat: -1, // Repeat indefinitely
          }
        );

        // Restore the previous progress if this is a recreation of the animation
        sjs_tween.progress(sjs_progress);

        // Store reference to this marquee's tween in our array
        tweens[index] = sjs_tween;
      };

      // Initialize the animation for this marquee
      // playMarquee();

      // Set up a resize handler for this specific marquee with debounce
      // This ensures the animation adjusts properly when the window size changes
      window.addEventListener(
        "resize",
        sjs_debounce(() => {
          // playMarquee();
        })
      );
    });

    // Debounce function to prevent excessive function calls during resize
    // This improves performance by waiting until resizing stops before recalculating
    function sjs_debounce(func) {
      var timer;
      return function (event) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(
          () => {
            func();
          },
          500, // Wait 500ms after last resize event before executing
          event
        );
      };
    }
  }

  // Initialize everything once the page has fully loaded
  window.addEventListener("load", function (event) {
    init();
  });
}



// Only run the marquee code if we're on the correct page
// This prevents the code from running unnecessarily on other pages
if (document.body.classList.contains("example_14")) {
  example_14();
}

export default example_14;