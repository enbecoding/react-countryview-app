import { current } from '@reduxjs/toolkit';
import React from 'react'
import {useSelector} from "react-redux"
import {selectDisplay} from "../redux/slices/displayCountrySlice"

const Overview = () => {
  let currentDisplay = useSelector(selectDisplay);

  return (
    <div className='stack'>
        <h1>{currentDisplay.name.official}</h1>

        <table className="overview-table">
            <tr>
              <td>Current Population: </td>
              <td>{currentDisplay.population}</td>
            </tr>
            <tr>
              <td>Language Used: </td>
              <td>{currentDisplay.languages.eng}</td>
            </tr>
            <tr>
              <td>Main Currency: </td>
              <td>{currentDisplay.currencies.USD.name}</td>
            </tr>
            <tr>
              <td>Map: </td>
              <td>{currentDisplay.maps.googleMaps}</td>
            </tr>
        </table>
    </div>
  )
}

export default Overview