import { giftCertificates, videos } from "../utils/const.js";

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
const certificateList = document.querySelector('[data-id="certificateList"]');

function createVideoElement(url) {
  const video = document.createElement("video");
  video.setAttribute("src", url);
  video.setAttribute("controls", "controls");
  video.setAttribute("autoplay", "true");
  video.setAttribute("width", "100%");
  video.setAttribute("type", "video/mp4");
  return video;
}

/**
 * <li class="grid grid-cols-2 justify-items-center mb-20 gap-8">
      <div
        class="sm:col-span-1 sm:mb-0 mb-4 col-span-2 sm:text-left text-center max-w-md content-center justify-items-center">
        <h3 class="mb-5 font-bold text-3xl lg:text-5xl">
          Видео с нашего проката летом
        </h3>
        <p class="font-normal">
          Посмотрите видео, и попробуйте ощутить положительные эмоции и
          почувствовать скорость.
        </p>
      </div>
      <div
        class="group relative sm:col-span-1 col-span-2 content-center justify-items-center rounded-lg overflow-hidden shadow-xl shadow-black/60">
        <img src="./images/for-video-summer.png" alt="123" class="w-full h-full object-cover">
        <div
          class="absolute lg:top-[120%] top-0 transition-all lg:group-hover:top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black/40">
          <button data-id="videoBtn" class="font-black text-white">Watch now</button>
        </div>
      </div>
    </li>
 */

function createCertificateElement(
  imageUrl,
  titleTextContent,
  descriptionTextContent,
  ind
) {
  const evenNumber = ind % 2 === 0;
  const li = document.createElement("li");
  const descriptionContainer = document.createElement("div");
  const descriptionTitle = document.createElement("h3");
  const descriptionText = document.createElement("p");
  const imageContainer = document.createElement("div");
  const image = document.createElement("img");

  li.classList.add(
    "grid",
    "grid-cols-2",
    "justify-items-center",
    "mb-20",
    "gap-8"
  );
  descriptionContainer.classList.add(
    "sm:col-span-1",
    "sm:mb-0",
    "mb-4",
    "col-span-2",
    "sm:text-left",
    "text-center",
    "max-w-md",
    "content-center",
    "justify-items-center"
  );
  descriptionTitle.classList.add(
    "mb-5",
    "font-bold",
    "text-3xl",
    "lg:text-5xl"
  );
  descriptionText.classList.add("font-normal");
  imageContainer.classList.add(
    "relative",
    "sm:col-span-1",
    "col-span-2",
    "content-center",
    "justify-items-center",
    "rounded-lg",
    "overflow-hidden",
    "shadow-xl",
    "shadow-black/60"
  );
  descriptionTitle.textContent = titleTextContent;
  descriptionText.textContent = descriptionTextContent;
  image.classList.add("w-full", "h-full", "object-cover");
  image.setAttribute("src", imageUrl);
  image.setAttribute("alt", titleTextContent);
  descriptionContainer.append(descriptionTitle, descriptionText);
  imageContainer.append(image);
  const evenArr = [descriptionContainer, imageContainer];
  const notEvenArr = [imageContainer, descriptionContainer];

  evenNumber ? li.append(...evenArr) : li.append(...notEvenArr);
  
  return li;
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

// certificateList.innerHTML = "";
giftCertificates.forEach(({ title, description, image }, ind) => {
  const certItem = createCertificateElement(image, title, description, ind);
  certificateList.appendChild(certItem);
});
