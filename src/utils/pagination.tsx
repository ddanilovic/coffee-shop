import React from "react"

type Pagination = {
  gotoNextPage: any
  gotoPrevPage: any
  displayAll: any
}

const Pagination: React.FC<Pagination> = ({
  gotoNextPage,
  gotoPrevPage,
  displayAll,
}) => {
  return (
    <React.Fragment>
      {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
      {gotoNextPage && <button onClick={displayAll}>All</button>}
    </React.Fragment>
  )
}

export default Pagination
