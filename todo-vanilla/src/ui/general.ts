/** Слой, где будет происходить работа с UI. Динамическая отрисовка списка todo и т.п. */


export function getDomElement(selector: string): Element {
  const element = document.querySelector(selector);
  if (element !== undefined && element !== null) {
    return element;
  }
  throw new Error(`Element not found by selector ${selector}`);
}
