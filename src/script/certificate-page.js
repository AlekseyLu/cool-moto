import { whyUs } from "../utils/const.js";
import { createCustomElement } from "../utils/helper.js";

const toTestBtn = document.querySelector('[data-id="toTest"]');
const toGoRide = document.querySelector("#toGoRide");
const toGoRideBtnSend = document.querySelector("#toGoRideBtn");
const closeBtnToGoRideModal = document.querySelector("#closeToGoRideModal");
const whyUsList = document.querySelector('[data-id="why-us-certificate"]');

const modalOpen = (item) => {
  item.classList.replace("hidden", "flex");
};

const modalClose = (item) => {
  item.classList.replace("flex", "hidden");
};

const sendFormToFoRide = (e) => {
  e.preventDefault();
  e.target.form.reset();
  console.log("send");
};

toTestBtn.addEventListener("click", () => modalOpen(toGoRide));
toGoRide.addEventListener("click", (e) => {
  if (e.target === toGoRide && e.target !== closeBtnToGoRideModal) {
    modalClose(toGoRide);
  }
});
closeBtnToGoRideModal.addEventListener("click", () => modalClose(toGoRide));
toGoRideBtnSend.addEventListener("click", (e) => sendFormToFoRide(e));

function createWhyUsCart(description, image, ind, arraylength) {
    console.log(arraylength -1 , ind)
  const even = ind % 2 === 0;
  const liStyles = [
    "grid",
    "grid-cols-3",
    "justify-items-center",
    (arraylength - 1 !== ind && "md:mb-20"),
    (arraylength - 1 !== ind && "mb-8"),
    "gap-8",
  ];
  const descriptionContainerStyles = [
    "md:col-span-2",
    "sm:mb-0",
    "mb-4",
    "flex",
    "col-span-3",
    "sm:text-left",
    "text-center",
    "content-center",
    "justify-items-center",
  ];
  const descriptionTextStyles = [
    even ? "sm:text-right" : "sm:text-left",
    "text-center",
    "text-2xl",
    "font-normal",
  ];
  const imageContainerStyles = [
    "group",
    "relative",
    "md:col-span-1",
    "col-span-3",
    "content-center",
    "justify-items-center",
    "rounded-lg",
    "max-h-80",
    "overflow-hidden",
    "shadow-xl",
    "shadow-black/60",
    "md:order-none",
    "order-first"
  ];
  const imageElementStyles = [
    "w-full",
    "min-h-64",
    "h-full",
    "object-cover",
    "object-center",
  ];
  const li = createCustomElement("li", liStyles);
  const descriptionContainer = createCustomElement(
    "div",
    descriptionContainerStyles
  );
  const descriptionText = createCustomElement("p", descriptionTextStyles);
  const imageContainer = createCustomElement("div", imageContainerStyles);
  const imageElement = createCustomElement("img", imageElementStyles);

  descriptionText.textContent = description;
  imageElement.setAttribute("src", image);
  imageElement.setAttribute("alt", "Why us image");

  descriptionContainer.append(descriptionText);
  imageContainer.append(imageElement);
  even
    ? li.append(descriptionContainer, imageContainer)
    : li.append(imageContainer, descriptionContainer);
  return li;
}

whyUs.forEach(({ description, image }, ind) => {
  const item = createWhyUsCart(description, image, ind, whyUs.length);
  whyUsList.append(item);
});

const swiper = new Swiper(".swiper3", {
    speed: 400,
    spaceBetween: 100,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination3",
    },
    navigation: {
      nextEl: ".swiper-button-next3",
      prevEl: ".swiper-button-prev3",
    },
    scrollbar: {
      el: ".swiper-scrollbar3",
    },
  });
