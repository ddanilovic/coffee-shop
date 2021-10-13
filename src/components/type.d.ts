//Context 
type GlobalContextProps = {
  children: React.ReactNode;
}
type TShopContext = {
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
};

type ShopProps = {
  subTitle:string;
  title:string;
};

type FilterProps = {
};

type ProductListProps = {
};

