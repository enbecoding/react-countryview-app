import React from 'react'
import { useSelector } from "react-redux";
import { selectDisplay } from '../redux/slices/displayCountrySlice';

const Symbols = () => {
  let currentDisplay = useSelector(selectDisplay)

  return (
    <div className='symbols'>
      <div className="stack">
        <h2>Flag of {currentDisplay.name.common}:</h2>
          {currentDisplay.flags ? (
            <img src={currentDisplay.flags.png} />
          ) : (
            "Data not found"
          )}
      </div>
      <div className="stack">
        <h2>The Coat of Arms of {currentDisplay.name.common} is:</h2>
        {currentDisplay.coatOfArms ? (
          <img src={currentDisplay.coatOfArms.png} />
        ) : (
          "Data not found"
        )}
      </div>
    </div>
  )
}

export default Symbols