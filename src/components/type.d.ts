//Context 
type GlobalContextProps = {
  children: React.ReactNode;
}
type TShopContext = {
  products: any;
  setProducts: (data: any) => void;
}
type TShopContextProps = {
  children: React.ReactNode;
}

//Short types
type Cart = {
  name: string;
  category: string;
  price: number;
  image: string;
}

//Components
type ButtonProps = {
  text: string;
  color: string;
  clickHandler?: () => void;
  classProp?:string
  cartProps?:Cart
}

type HeaderProps = {
  logo:string;
  rightIcon:string;
};

type HeroProps = {
  title:string;
  category:string;
  images: [];
  description: string;
  dimmentions:Dimmentions;
  size:number;
};

type Dimmentions = {
  width: number;
  height: number;
}

type ProductProps = {
  name:string;
  category:string;
  price:number;
  image:any;
};

type ShopProps = {
  subTitle:string;
  title:string;
};

type FilterProps = {
};

type ProductListProps = {
};

