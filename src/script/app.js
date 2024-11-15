const videos = [
  "https://motoru.ru/userfiles/video/otzyv3.mp4",
  "https://motoru.ru/userfiles/video/otzyv2.mp4",
  "https://motoru.ru/userfiles/video/otzyv1.mp4",
];

const burgerBtn = document.querySelector("#burgerBtn");
const menu = document.querySelector("#menu");
const burgerCloseBtn = document.querySelector("#burgerCloseBtn");
const toTestBtn = document.querySelectorAll('[data-id="toTest"]');
const playBtnList = document.querySelectorAll('[data-id="videoBtn"]');
const videoModal = document.querySelector("#videoModal");
const closeVideoModalBtn = document.querySelector("#closeVidepModalBtn");
const linkList = document.querySelectorAll('[data-id="linkToSection"]');
const toGoRide = document.querySelector("#toGoRide");
const closeBtnToGoRideModal = document.querySelector("#closeToGoRideModal");
const toGoRideBtn = document.querySelector("#toGoRideBtn");
const content = document.querySelector("#content");

function createVideoElement(url) {
  const video = document.createElement("video");
  video.setAttribute("src", url);
  video.setAttribute("controls", "controls");
  video.setAttribute("autoplay", "true");
  video.setAttribute("width", "100%");
  video.setAttribute("type", "video/mp4");
  return video;
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
