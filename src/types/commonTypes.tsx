export interface ProductType {
  description: string;
  id: number;
  category: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

export type BasketState = {
  products: ProductType[];
};

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}
