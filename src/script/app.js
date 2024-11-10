(() => {
  const burgerBtn = document.querySelector("#burgerBtn");
  const menu = document.querySelector("#menu");
  const burgerCloseBtn = document.querySelector("#burgerCloseBtn");
  const playBtnList = document.querySelectorAll("#videoBtn");
  const videoModal = document.querySelector("#videoModal");
  const closeModalBtn = document.querySelector("#closeModalBtn");
  const linkList = document.querySelectorAll("#linkToSection");
  const motoImg = document.querySelector("#motoImg");
  const motoPrevImgBtn = document.querySelector("#motoPrevImgBtn");
  const motoNextImgBtn = document.querySelector("#motoNextImgBtn");
  const faqList = document.querySelectorAll("#question-faq");

  let countImg = 1;

  const closeMenu = () => {
    menu.classList.remove("translate-x-0");
    menu.classList.add("-translate-x-full");
    document.body.classList.remove("overflow-hidden");
  };

  const openMenu = () => {
    menu.classList.add("translate-x-0");
    menu.classList.remove("-translate-x-full");
    document.body.classList.add("overflow-hidden");
  };

  const modalOpen = () => {
    videoModal.classList.remove("hidden");
    videoModal.classList.add("flex");
    document.body.classList.add("overflow-hidden");
  };

  const modalClose = () => {
    videoModal.classList.add("hidden");
    videoModal.classList.remove("flex");
    document.body.classList.remove("overflow-hidden");
  };

  const changeMotoImg = (variant) => {
    variant ? countImg++ : countImg--;
    console.log(countImg);
    motoImg.src = `./images/moto-${countImg}.jpg`;
    motoPrevImgBtn.disabled = countImg < 2;
    motoNextImgBtn.disabled = countImg > 3;
  };

  burgerBtn.addEventListener("click", openMenu);

  burgerCloseBtn.addEventListener("click", closeMenu);

  playBtnList.forEach((btn) => {
    btn.addEventListener("click", modalOpen);
  });

  videoModal.addEventListener("click", (e) => {
    if (e.target === videoModal && e.target !== closeModalBtn) {
      modalClose();
    }
  });

  closeModalBtn.addEventListener("click", modalClose);

  linkList.forEach((link) => {
    link.addEventListener("click", () => {
      console.log(link);
      closeMenu();
    });
  });

  motoPrevImgBtn.addEventListener("click", changeMotoImg.bind(null, false));

  motoNextImgBtn.addEventListener("click", changeMotoImg.bind(null, true));

  faqList.forEach((faq, ind) => {
    faq.addEventListener("click", () => {
      const arrow = faq.querySelector("#arrow");
      const ansver = faq.querySelector("#answer-faq");
      const heightAnsver =  Math.ceil(ansver.getBoundingClientRect().height);

      faqList.forEach((f, i) => {
        if (ind !== i) {
          const arrow = f.querySelector("#arrow");
          f.classList.remove(`max-h-[calc(664px+96px)]`);
          arrow.classList.replace("rotate-[225deg]", "rotate-45");
        }
      });

      faq.classList.toggle(`max-h-[calc(664px+96px)]`);
      arrow.classList.toggle("rotate-45");
      arrow.classList.toggle("rotate-[225deg]");

    });
  });
})();
