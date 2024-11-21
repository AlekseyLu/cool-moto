export function createCustomElement(item, classes) {
    const element = document.createElement(item);
    if (classes.length > 0) {
      element.classList.add(...classes);
    }
    return element;
  }