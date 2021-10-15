import React from "react"

import App from "../App"
import { GlobalContextProvider } from "../context"

import { graphql } from "gatsby"

const IndexPage = ({ data }: any) => {
  console.log(data.featured)
  return (
    <GlobalContextProvider>
      <App data={data.menu.edges} />
    </GlobalContextProvider>
  )
}

export default IndexPage

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
    featured: allContentfulFeaturedItem {
      edges {
        node {
          bestseller
          category
          currency
          id
          name
          price
          featured
          image {
            fixed {
              src
            }
          }
          childContentfulFeaturedItemDetailsJsonNode {
            description
            dimmentions {
              height
              width
            }
            id
            size
          }
        }
      }
    }
    recommmended: allContentfulRecommendedItems {
      edges {
        node {
          image {
            fixed(width: 117, height: 175) {
              src
            }
          }
        }
      }
    }
  }
`
