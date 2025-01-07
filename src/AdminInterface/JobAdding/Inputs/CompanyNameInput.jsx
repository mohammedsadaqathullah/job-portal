import React, { useContext } from 'react'
import DataContext from '../../DataContext';


const CompanyNameInput = () => {
    const { companyName, setCompanyName, } = useContext(DataContext)
    return (
        <span className='inputBoxCont'>
            <p className='title'>Company Name</p>
            <input type="text"
                placeholder='Amazon, Microsoft, Swiggy'
                className='inputBox'
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required />
        </span>
    )
}

export default CompanyNameInput;