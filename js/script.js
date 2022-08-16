import initMenuMobile from "./modules/menu-mobile.js";
import initCarousel from "./modules/carousel.js";
import initDropDown from "./modules/drop-down.js";
import initRadio from "./modules/radio.js";
import initTempo from "./modules/tempo.js";

initMenuMobile();
initCarousel();
initDropDown();
initRadio();
initTempo();

const cu = document.querySelector("[data-cu]")
const xota = document.querySelector("[data-cu='taxa']")

cu.addEventListener("keyup", (e) => {
  if (xota.innerText !== "")
    xota.innerText = e.target.value
  else if (xota.innerText === "")
    xota.innerText = "1,48"
})