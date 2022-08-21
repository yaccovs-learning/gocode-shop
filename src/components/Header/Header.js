import React from 'react'
import useClock from '../../customHooks/useClock'
import {FilterBy, SortBy} from '../FilterSortBy/FilterSortBy'
import './Header.css'

const Header = () => {
  const clock = useClock();
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <h2>{clock}</h2>
      <div className="sort">
        <FilterBy />
        <SortBy />
      </div>
    </nav>
  )
}

export default Header