(() => {
  const burgerBtn = document.querySelector("#burgerBtn");
  const menu = document.querySelector("#menu");
  const burgerCloseBtn = document.querySelector("#burgerCloseBtn");
  const toTestBtn = document.querySelectorAll("#toTest");
  const playBtnList = document.querySelectorAll("#videoBtn");
  const videoModal = document.querySelector("#videoModal");
  const closeModalBtn = document.querySelector("#closeModalBtn");
  const linkList = document.querySelectorAll("#linkToSection");
  const toGoRide = document.querySelector("#toGoRide");
  const closeBtnToGoRideModal = document.querySelector("#closeToGoRideModal");
  const toGoRideBtn = document.querySelector("#toGoRideBtn");

  const closeMenu = () => {
    // menu.classList.remove("translate-x-0");
    // menu.classList.add("-translate-x-full");
    menu.classList.replace("translate-x-0", "-translate-x-full");
    document.body.classList.remove("overflow-hidden");
  };

  const openMenu = () => {
    menu.classList.replace("-translate-x-full", "translate-x-0");
    document.body.classList.add("overflow-hidden");
  };

  const modalOpen = (item, ind) => {
    item.classList.replace("hidden", "flex");
    document.body.classList.add("overflow-hidden");
  };

  const modalClose = (item) => {
    item.classList.replace("flex", "hidden");
    document.body.classList.remove("overflow-hidden");
  };

  const sendFormToFoRide = (e) => {
    e.preventDefault();
    e.target.form.reset();
    console.log("send")
  }

  toGoRideBtn.addEventListener("click", (e) => sendFormToFoRide(e));

  burgerBtn.addEventListener("click", openMenu);

  burgerCloseBtn.addEventListener("click", closeMenu);

  toTestBtn.forEach(testBtn => testBtn.addEventListener("click", () => modalOpen(toGoRide)));
  closeBtnToGoRideModal.addEventListener("click", () => modalClose(toGoRide));

  playBtnList.forEach((btn, ind) => {
    btn.addEventListener("click", () => modalOpen(videoModal, ind));
  });

  videoModal.addEventListener("click", (e) => {
    if (e.target === videoModal && e.target !== closeModalBtn) {
      modalClose(videoModal);
    }
  });

  closeModalBtn.addEventListener("click", () => modalClose(videoModal));

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
    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 1.1,
        spaceBetween: 50,
      },
    },
  });
})();
