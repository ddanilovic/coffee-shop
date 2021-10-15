import React from "react"

import App from "../App"
import { GlobalContextProvider } from "../context"

import { Link, graphql } from "gatsby"

const IndexPage = ({ data }: any) => {
  return (
    <GlobalContextProvider>
      <App data={data.menu.edges} />
    </GlobalContextProvider>
  )
}

export const query = graphql`
  {
    menu: allContentfulShopItem {
      edges {
        node {
          id
          name
          category
          price
          currency
          bestseller
          featured
          image {
            fluid(quality: 6) {
              src
            }
          }
        }
      }
    }
  }
`

export default IndexPage
