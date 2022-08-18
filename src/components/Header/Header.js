import React from 'react'
import {FilterBy, SortBy} from '../FilterSortBy/FilterSortBy'
import './Header.css'

const Header = () => {
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>

      <div className="sort">
        <FilterBy />
        <SortBy />
      </div>
    </nav>
  )
}

export default Header