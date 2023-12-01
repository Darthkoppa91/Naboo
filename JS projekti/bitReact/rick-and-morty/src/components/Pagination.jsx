import React from 'react'

const Pagination = ({goToNextPage}) => {
  return (
    <div className='pagination'>

    <button>Prev</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>5</button>
    <button onClick={goToNextPage}>Next</button>
    </div>
  )
}

export default Pagination;