
import '../src/styles/style.css'
import { gsap } from 'gsap'

function colorModeToggle() {
  const htmlElement = document.documentElement;
  
  // Helper function for attribute parsing
  function attr(defaultVal, attrVal) {
    const defaultValType = typeof defaultVal;
    if (typeof attrVal !== "string" || attrVal.trim() === "") return defaultVal;
    if (attrVal === "true" && defaultValType === "boolean") return true;
    if (attrVal === "false" && defaultValType === "boolean") return false;
    if (isNaN(attrVal) && defaultValType === "string") return attrVal;
    if (!isNaN(attrVal) && defaultValType === "number") return +attrVal;
    return defaultVal;
  }

  const scriptTag = document.querySelector("[sj_color_vars]");
  if (!scriptTag) {
    console.warn("Script tag with sj_color_vars attribute not found");
    return;
  }

  let colorModeDuration = attr(0.5, scriptTag.getAttribute("duration"));
  let colorModeEase = attr("power1.out", scriptTag.getAttribute("ease"));

  const cssVariables = scriptTag.getAttribute("sj_color_vars");
  if (!cssVariables.length) {
    console.warn("Value of sj_color_vars attribute not found");
    return;
  }

  // Store color values for each set
  let color_set_dark_1 = {};
  let color_set_dark_2 = {};
  let color_set_dark_3 = {};

  // Build color objects
  cssVariables.split(",").forEach(function (item) {
    const computed = getComputedStyle(htmlElement);
    let pale_green_value = computed.getPropertyValue(`--color_set_pale_green--${item}`).trim();
    let blue_value = computed.getPropertyValue(`--color_set_blue--${item}`).trim();
    let pale_red_value = computed.getPropertyValue(`--color_set_pale_red--${item}`).trim();

    if (pale_green_value) {
      color_set_dark_1[`--color_set_pale_green--${item}`] = pale_green_value;
      color_set_dark_2[`--color_set_pale_green--${item}`] = blue_value || pale_green_value;
      color_set_dark_3[`--color_set_pale_green--${item}`] = pale_red_value || pale_green_value;
    }
  });

  function setColors(colorObject, animate) {
    if (typeof gsap !== "undefined" && animate) {
      gsap.to(":root", {
        duration: colorModeDuration,
        ease: colorModeEase,
        ...colorObject
      });
    } else {
      Object.entries(colorObject).forEach(([variable, value]) => {
        htmlElement.style.setProperty(variable, value);
      });
    }
  }

  function switchMode(mode, animate) {
    console.log("Switching mode to:", mode);
    
    const colorObject = 
      mode === "color_set_dark_2" ? color_set_dark_2 :
      mode === "color_set_dark_3" ? color_set_dark_3 :
      color_set_dark_1;

    setColors(colorObject, animate);
    
    // Store the preference
    localStorage.setItem("color_set_dark_mode", mode);
  }

  // Event listeners for mode toggle buttons
  document.addEventListener("click", (e) => {
    const paleGreenButton = e.target.closest("[sj_color_pale_green]");
    const blueButton = e.target.closest("[sj_color_blue]");
    const paleRedButton = e.target.closest("[sj_color_pale_red]");

    if (paleGreenButton) {
      switchMode("color_set_dark_1", true);
    } else if (blueButton) {
      switchMode("color_set_dark_2", true);
    } else if (paleRedButton) {
      switchMode("color_set_dark_3", true);
    }
  });

  // Initialize based on stored preference
  const storagePreference = localStorage.getItem("color_set_dark_mode");
  if (storagePreference) {
    switchMode(storagePreference, false);
  } else {
    switchMode("color_set_dark_1", false);
  }
}

// Call the function
colorModeToggle();