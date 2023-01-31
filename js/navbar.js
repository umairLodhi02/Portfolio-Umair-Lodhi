import {
  NAV_FLEX_CLASSES,
  NAV_PAGE_LINKS,
  NAV_SOCIAL_LINKS,
} from "./constants.js";
import { getElement, addClasses } from "./helpers.js";

let webNav = getElement(".webNav");
let pageLinks = getElement(".pageLinks");
let socialLinks = getElement(".socialLinks");
let stickyNavbar = getElement("#stickyNavbar");
let mobileNav = getElement(".mobileNav");
let toggler = getElement(".toggler");
let close = getElement(".close");
let mobLinks = getElement(".mobLinks");

let innerlist = document.createElement("ul");

function createNavbarWeb() {
  createList(NAV_PAGE_LINKS, pageLinks);
  createList(NAV_SOCIAL_LINKS, socialLinks, true);
}

function createNavbarMob() {
  createList(NAV_PAGE_LINKS, mobLinks);
  createList(NAV_SOCIAL_LINKS, innerlist, true);
}

function createList(array, container, social) {
  array.map((link) => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    if (social) {
      let i = document.createElement("i");
      i.classList.add("fa-brands", link);
      a.appendChild(i);
    } else {
      a.innerText = link;
    }
    a.href = "#";

    li.appendChild(a);
    container.appendChild(li);
  });
}
createNavbarWeb();
createNavbarMob();

addClasses(["innerList", ...NAV_FLEX_CLASSES], innerlist);

addClasses(NAV_FLEX_CLASSES, pageLinks);
addClasses(NAV_FLEX_CLASSES, socialLinks);
addClasses(NAV_FLEX_CLASSES, mobLinks);

mobLinks.appendChild(innerlist);

toggler.addEventListener("click", function () {
  mobileNav.style.display = "block";
});

close.addEventListener("click", function () {
  mobileNav.style.display = "none";
});
window.addEventListener("scroll", (e) => {
  let scrollPos = window.scrollY;
  let navPos = webNav.getBoundingClientRect().top;
  if (scrollPos > navPos) {
    stickyNavbar.classList.add("sticky");
    // header.classList.add("navbarOffsetMargin");
  } else {
    stickyNavbar.classList.remove("sticky");
    // header.classList.remove("navbarOffsetMargin");
  }
});
