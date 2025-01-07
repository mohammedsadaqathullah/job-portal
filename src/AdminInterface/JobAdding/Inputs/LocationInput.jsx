import React, { useContext } from 'react'
import DataContext from '../../DataContext';

const LocationInput = () => {
    const { location, setLocation, } = useContext(DataContext)
    return (
        <span className="inputBoxCont">
            <p className='title'>Location</p>
            <select name="loc" className='dropDownInputBox'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required>
                <option value="" >
                    Choose Preferred Location
                </option>
                <option value="Onsite" className='option2'>Chennai</option>
            </select>
        </span>
    )
}

export default LocationInput;