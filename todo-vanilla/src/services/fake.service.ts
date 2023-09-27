/** Эти данные приходят с сервера. */
export const headersInfo = [
  {
    id: 1,
    title: "Todo",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
  },
];

export function addHeaderInfo(headerInfo: any) {
  headersInfo.push(headerInfo);
}
