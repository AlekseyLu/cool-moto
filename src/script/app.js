(() => {
    const burgerBtn = document.querySelector('#burgerBtn');
    const menu = document.querySelector('#menu');
    const burgerCloseBtn = document.querySelector('#burgerCloseBtn');

    burgerBtn.addEventListener('click', () => {
        menu.classList.add('translate-x-0');
        menu.classList.remove('-translate-x-full');
        document.body.classList.add('overflow-hidden');
    });

    burgerCloseBtn.addEventListener('click', () => {
        menu.classList.remove('translate-x-0');
        menu.classList.add('-translate-x-full');
        document.body.classList.remove('overflow-hidden');
    });

})();