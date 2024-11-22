export function createCustomElement(item, classes) {
  const element = document.createElement(item);
  if (classes.length > 0) {
    element.classList.add(...classes);
  }
  return element;
}

export function changeNumberFormat(number) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    maximumSignificantDigits: 4,
    currency: "RUB",
  }).format(number);
}

/**
 * 
 * @param {String[]} classes Массив строк, классы из тэилвинда
 * @param {{[key: string]: string}[]} attributes Массив обьектов, key - название атрибуту, value - значение атрибута 
 * @returns HTMLImgElement
 */

export function createLogoImage(classes = [], attributes) {
  const img = createCustomElement("img", classes);
  attributes && attributes.forEach(([key, value]) => {
    img.setAttribute(key, value);
  });
  return img;
}
