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


//Components
type ButtonProps = {
  text: string;
  color: string;
  clickHandler?: () => void;
}

type HeaderProps = {
  logo:string;
  rightIcon:string;
};

type HeroProps = {
  title:string;
  category:string;
  about: string;
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

