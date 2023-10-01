/** Эти данные приходят с сервера. */
export const headersInfo: HeaderInfo[] = [
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
  {
    id: 4,
    title: "Location",
    path: "/location"
  }
];

export interface HeaderInfo{
  id: number;
  title: string;
  path: string
}

export function addHeaderInfo(headerInfo: HeaderInfo) {
  headersInfo.push(headerInfo);
}
