import React, { useState, useContext } from "react"

import ReactPaginate from "react-paginate"

import { ShopContext } from "../../context"

import { ProductList } from ".."

const Shop: React.FC<ShopProps> = props => {
  const { title, subTitle } = props

  const [pageNumber, setPageNumber] = useState(0)

  const { products } = useContext(ShopContext)

  const productsPerPage = 6
  const pagesVisited = pageNumber * productsPerPage
  const pageCount = Math.ceil(products.length / productsPerPage)

  const displayProducts = products.slice(
    pagesVisited,
    pagesVisited + productsPerPage
  )

  const changePage = ({ selected }: any) => {
    setPageNumber(selected)
  }

  return (
    <div className="shop">
      <div className="shop__title">
        <h2>{title}</h2>
        <h2>/ {subTitle}</h2>
      </div>
      <div className="shop__main">
        <ProductList displayProducts={displayProducts} />
      </div>
      <div className="shop__pagination">
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changePage}
          pageRangeDisplayed={10}
          marginPagesDisplayed={10}
        />
      </div>
    </div>
  )
}

export default Shop
