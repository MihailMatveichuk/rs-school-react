export type ICards = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  stock?: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export interface ICardForm {
  file: string;
  name: string;
  birthday: string;
  select: string;
  switcher: boolean;
  checkbox: boolean;
}

export type MyData = Array<ICards>;

export type Term = string;

export interface SyntheticEventTarget extends EventTarget {
  parentNode: { id: string };
}

export interface SyntheticEvent extends React.MouseEvent<HTMLButtonElement> {
  target: SyntheticEventTarget;
}

export interface HeaderTarget extends EventTarget {
  id: string;
}

export interface SyntheticHeader extends React.MouseEvent<HTMLAnchorElement> {
  target: HeaderTarget;
}
