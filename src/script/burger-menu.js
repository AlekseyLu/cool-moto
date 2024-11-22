import { navigateList, navigateListCertificate } from "../utils/const.js";

let currentNavigateForPage;
const location = window.location.pathname;
const currentLocation = location.split('/')[1];
console.log(currentLocation);
switch (currentLocation) {
  case "certificate.html":
    currentNavigateForPage = navigateListCertificate;
    break;
  case "index.html":
    currentNavigateForPage = navigateList;
    break;
  default:
    currentNavigateForPage = navigateList;
    break;
}

const burgerBtn = document.querySelector("#burgerBtn");
const menu = document.querySelector("#menu");
const burgerCloseBtn = document.querySelector("#burgerCloseBtn");
const navigateListElement = document.querySelectorAll(
  '[data-id="navigate-list"]'
);

function createCustomElement(item, classes) {
  const element = document.createElement(item);
  if (classes.length > 0) {
    element.classList.add(...classes);
  }
  return element;
}

function createNavigateItemElement(dataId, label, anchorSection) {
  const li = createCustomElement("li", ["group"]);
  const link = createCustomElement("a", [
    "group-active:text-purple-400",
    "md:group-hover:text-purple-400",
    "transition",
    "min-w-20",
  ]);

  li.setAttribute("data-id", dataId);
  link.setAttribute("href", anchorSection);
  link.textContent = label;
  li.append(link);
  return li;
}

navigateListElement.forEach((navigateItemElement) => {
    currentNavigateForPage.forEach(({ dataId, label, anchorSection }) => {
    const itemElement = createNavigateItemElement(dataId, label, anchorSection);
    navigateItemElement.append(itemElement);
  });
});

const linkList = document.querySelectorAll('[data-id="linkToSection"]');

linkList.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

linkList[0].addEventListener("click", () => {
  window.scrollTo(0, 0);
});

const closeMenu = () => {
  menu.classList.replace("translate-x-0", "-translate-x-full");
};

const openMenu = () => {
  menu.classList.replace("-translate-x-full", "translate-x-0");
};

burgerBtn.addEventListener("click", openMenu);

burgerCloseBtn.addEventListener("click", closeMenu);
