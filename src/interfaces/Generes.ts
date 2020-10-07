export interface RootObject {
  categories: Categories;
}

interface Categories {
  href: string;
  items: Item[];
  limit: number;
  next: string;
  offset: number;
  previous?: any;
  total: number;
}

interface Item {
  href: string;
  icons: Icon[];
  id: string;
  name: string;
}

interface Icon {
  height?: number;
  url: string;
  width?: number;
}
