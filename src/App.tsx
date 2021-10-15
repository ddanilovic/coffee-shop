import React, { useContext, useEffect } from "react"

import "./scss/main.scss"
import { ShopContext } from "./context"

import { Header, Hero, Shop } from "./components"

import logoIcon from "./assets/logo/logo.png"

import cartIcon from "./assets/icons/cart.png"

type AppProps = {
  data: any
}

const App: React.FC<AppProps> = ({ data }) => {
  const { setProducts } = useContext(ShopContext)

  const featured = data.featured.edges[0].node
  const featuredDetails = featured.details
  const recommmended = data.recommmended.edges[0].node

  useEffect(() => {
    setProducts(data.menu.edges)
  }, [])
  console.log(featured.image)
  return (
    <div className="app">
      <Header logo={logoIcon} rightIcon={cartIcon} />
      <Hero
        title={featured.name}
        hero={featured.image}
        images={recommmended.image}
        category={featured.category}
        description={featuredDetails.description}
        dimmentions={featuredDetails.dimmentions}
        size={featuredDetails.size / 1000}
        price={featured.price}
      />
      <Shop title="Photography" subTitle="Premium Photos" />
    </div>
  )
}

export default App
