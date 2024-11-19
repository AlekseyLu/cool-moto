import { giftCertificates, videos, navigateList, faqList } from "../utils/const.js";

const NUMBER_CERTIFICATE_CARDS = 4;

const burgerBtn = document.querySelector("#burgerBtn");
const menu = document.querySelector("#menu");
const burgerCloseBtn = document.querySelector("#burgerCloseBtn");
const toTestBtn = document.querySelectorAll('[data-id="toTest"]');
const playBtnList = document.querySelectorAll('[data-id="videoBtn"]');
const videoModal = document.querySelector("#videoModal");
const closeVideoModalBtn = document.querySelector("#closeVidepModalBtn");
const toGoRide = document.querySelector("#toGoRide");
const closeBtnToGoRideModal = document.querySelector("#closeToGoRideModal");
const toGoRideBtn = document.querySelector("#toGoRideBtn");
const content = document.querySelector("#content");
const certificateList = document.querySelector('[data-id="certificateList"]');
const visibleMoreButton = document.querySelector(
  '[data-id="visible-more-certificate"]'
);
const navigateListElement = document.querySelector('[data-id="navigate-list"]');
const faqListElement = document.querySelector('[data-id="faq-list"]');

function createNavigateItemElement(dataId, label, anchorSection) {
  const li = createCustomElement("li", ["group"]);
  const link = createCustomElement("a", [
    "group-active:text-purple-400",
    "transition",
  ]);

  li.setAttribute("data-id", dataId);
  link.setAttribute("href", anchorSection);
  link.textContent = label;
  li.append(link);
  return li;
}

function createVideoElement(url) {
  const video = document.createElement("video");
  video.setAttribute("src", url);
  video.setAttribute("controls", "controls");
  video.setAttribute("autoplay", "true");
  video.setAttribute("width", "100%");
  video.setAttribute("type", "video/mp4");
  return video;
}

function createCustomElement(item, classes) {
  const element = document.createElement(item);
  if (classes.length > 0) {
    element.classList.add(...classes);
  }
  return element;
}

function changeNumberFormat(number) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    maximumSignificantDigits: 4,
    currency: "RUB",
  }).format(number);
}

function createCertificateElement(
  id,
  dataId,
  title,
  description,
  image,
  priceStart,
  icon
) {
  const li = createCustomElement("li", [
    "grid",
    "grid-cols-3",
    "min-h-60",
    "max-h-64",
    "rounded-lg",
    "overflow-hidden",
    "shadow-md",
    "shadow-zinc-500",
  ]);
  const descriptionContainer = createCustomElement("div", [
    "col-span-2",
    "flex",
    "flex-col",
    "justify-between",
    "sm:p-6",
    "p-4",
  ]);
  const descriptionWrapper = createCustomElement("div", []);
  const descriptionTitle = createCustomElement("h2", [
    "lg:text-2xl",
    "text-xl",
    "line-clamp-2",
    "mb-4",
  ]);
  const descriptionText = createCustomElement("p", [
    "sm:line-clamp-3",
    "line-clamp-5",
    "lg:text-base",
    "text-sm",
  ]);
  const footerContainer = createCustomElement("div", [
    "flex",
    "items-center",
    "justify-between",
  ]);
  const moreButton = createCustomElement("button", [
    "group",
    "flex",
    "items-center",
    "text-base",
    "text-red-500",
    "font-bold",
    "md:hover:text-red-700",
    "transition",
    "active:text-red-700",
  ]);

  const moreButtonText = createCustomElement("span", [
    "group-hover:text-red-400",
  ]);
  const moreButtonIcon = createCustomElement("span", []);
  const priceElement = createCustomElement("span", ["text-sm"]);
  const imageElement = createCustomElement("img", [
    "col-span-1",
    "object-cover",
    "h-full",
    "object-center",
  ]);
  li.setAttribute("data-id", id);
  moreButton.setAttribute("data-id", dataId);
  descriptionTitle.textContent = title;
  descriptionText.textContent = description;
  priceElement.textContent = `от ${changeNumberFormat(priceStart)}`;
  moreButtonIcon.innerHTML = icon;
  moreButtonText.textContent = "Подробнее";
  imageElement.setAttribute("src", image);
  imageElement.setAttribute("alt", title);

  descriptionContainer.append(descriptionWrapper, footerContainer);
  descriptionWrapper.append(descriptionTitle, descriptionText);
  moreButton.append(moreButtonText, moreButtonIcon);
  footerContainer.append(moreButton, priceElement);
  li.append(descriptionContainer, imageElement);
  return li;
}

function createFaqItemElement(title, description) {
  const container = createCustomElement("div", [
    "ac",
    "cursor-pointer",
    "!border-0",
    "active:bg-purple-100",
    "md:hover:bg-purple-100",
    "transition-all",
    "duration-500",
  ]);
  const h2 = createCustomElement("h2", ["ac-header", "!border-b", "!border-zinc-300"]);
  const button = createCustomElement("button", ["ac-trigger", "!py-5", "truncate", "!text-2xl", "sm:!text-5xl", "!font-medium"]);
  const descriptionWrapper = createCustomElement("div", ["ac-panel"]);
  const descriptionElement = createCustomElement("p", ["ac-text", "px-4", "py-6"]);

  button.setAttribute("type", "button");
  button.textContent = title;
  descriptionElement.textContent = description;
  h2.append(button);
  descriptionWrapper.append(description);
  container.append(h2, descriptionWrapper);

  return container;
}

const closeMenu = () => {
  menu.classList.replace("translate-x-0", "-translate-x-full");
};

const openMenu = () => {
  menu.classList.replace("-translate-x-full", "translate-x-0");
};

const openVideoModal = (item, ind) => {
  item.classList.replace("hidden", "flex");
  const videoElement = createVideoElement(videos[ind]);
  content.append(videoElement);
};

const closeVideoModal = (item) => {
  content.innerHTML = "";
  item.classList.replace("flex", "hidden");
};

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

navigateList.forEach(({ dataId, label, anchorSection }) => {
  const itemElement = createNavigateItemElement(dataId, label, anchorSection);
  navigateListElement.append(itemElement);
});

const linkList = document.querySelectorAll('[data-id="linkToSection"]');

toGoRideBtn.addEventListener("click", (e) => sendFormToFoRide(e));

burgerBtn.addEventListener("click", openMenu);

burgerCloseBtn.addEventListener("click", closeMenu);

toTestBtn.forEach((testBtn) =>
  testBtn.addEventListener("click", () => modalOpen(toGoRide))
);
closeBtnToGoRideModal.addEventListener("click", () => modalClose(toGoRide));

toGoRide.addEventListener("click", (e) => {
  if (e.target === toGoRide && e.target !== closeBtnToGoRideModal) {
    modalClose(toGoRide);
  }
});

playBtnList.forEach((btn, ind) => {
  btn.addEventListener("click", () => openVideoModal(videoModal, ind));
});

videoModal.addEventListener("click", (e) => {
  if (e.target === videoModal && e.target !== closeVideoModalBtn) {
    closeVideoModal(videoModal);
  }
});

closeVideoModalBtn.addEventListener("click", () => closeVideoModal(videoModal));

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && videoModal.classList.contains("flex")) {
    closeVideoModal(videoModal);
  }
  if (e.key === "Escape" && toGoRide.classList.contains("flex")) {
    modalClose(toGoRide);
  }
});

linkList.forEach((link) => {
  link.addEventListener("click", () => {
    console.log(link);
    closeMenu();
  });
});

linkList[0].addEventListener("click", () => {
  window.scrollTo(0, 0);
});

const btnSpinning = [
  { transform: "translateY(0)" },
  { transform: "translateY(20px)" },
  { transform: "translateY(0)" },
];

const btnTiming = {
  duration: 2000,
  easing: "ease-in-out",
  fill: "both",
  iterations: Infinity,
};

const initAnimate = toTestBtn[0].animate(btnSpinning, btnTiming);

toTestBtn[0].addEventListener("mouseover", () => {
  initAnimate.pause();
});

toTestBtn[0].addEventListener("mouseout", () => {
  initAnimate.play();
});

faqList.forEach(({title, description}) => {
  const accardionItem = createFaqItemElement(title, description);
  faqListElement.append(accardionItem);
});

new Accordion(".accordion-container", {
  duration: 400,
  showMultiple: false,
});

const swiper = new Swiper(".swiper1", {
  speed: 400,
  spaceBetween: 100,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination1",
  },
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  scrollbar: {
    el: ".swiper-scrollbar1",
  },
});

giftCertificates.forEach(
  ({ id, dataId, title, description, image, priceStart, icon }, ind) => {
    const certItem = createCertificateElement(
      id,
      dataId,
      title,
      description,
      image,
      priceStart,
      icon
    );
    if (ind < NUMBER_CERTIFICATE_CARDS) {
      certificateList.appendChild(certItem);
    } else {
      certItem.classList.replace("grid", "hidden");
      certificateList.appendChild(certItem);
    }
  }
);

visibleMoreButton.addEventListener("click", () => {
  const certificateListElement = document.querySelectorAll(
    `[data-id="${giftCertificates[0].id}"]`
  );
  const certificateHiddenElement = Array.from(certificateListElement).slice(4);
  certificateHiddenElement.forEach((certificateElement) => {
    certificateElement.classList.replace("hidden", "grid");
  });
  visibleMoreButton.classList.replace("block", "hidden");
});

function changeContentModalCertificate(element, ind) {
  const certificate = giftCertificates[ind];
  const imageElement = element.querySelector(
    '[data-id="image-certificate-modal"]'
  );
  const titleElement = element.querySelector(
    '[data-id="title-certificate-modal"]'
  );
  const priceElement = element.querySelector(
    '[data-id="price-certificate-modal"]'
  );
  const descriptionElement = element.querySelector(
    '[data-id="description-certificate-modal"]'
  );
  const listFeature = element.querySelector(
    '[data-id="list-certificate-modal"]'
  );
  const titleFeature = element.querySelector(
    '[data-id="title-list-certificate-modal"]'
  );
  titleFeature.classList.add("hidden");
  listFeature.classList.add("hidden");
  imageElement.setAttribute("src", certificate.image);
  titleElement.textContent = certificate.title;
  priceElement.textContent = `от ${changeNumberFormat(
    certificate.priceStart
  )} до ${changeNumberFormat(certificate.priceFull)}`;
  descriptionElement.textContent = certificate.description;
  if (certificate.feature.length > 0) {
    listFeature.classList.replace("hidden", "block");
    titleFeature.classList.replace("hidden", "block");
    certificate.feature.forEach((feature) => {
      const item = createCustomElement("li", []);
      item.textContent = feature;
      listFeature.append(item);
    });
  }
}

const moreButtonCertificate = document.querySelectorAll(
  `[data-id="${giftCertificates[0].dataId}"]`
);
const closeButtonCertificateModal = document.querySelector(
  '[data-id="closeCertificateModal"]'
);
const certificateModal = document.querySelector('[data-id="certificateModal"]');

moreButtonCertificate.forEach((moreButton, ind) => {
  moreButton.addEventListener("click", () => {
    modalOpen(certificateModal);
    changeContentModalCertificate(certificateModal, ind);
    document.body.classList.add("overflow-y-hidden");
  });
});
closeButtonCertificateModal.addEventListener("click", () => {
  modalClose(certificateModal);
  document.body.classList.remove("overflow-y-hidden");
});
