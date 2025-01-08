import React, { useContext } from 'react'
import DataContext from '../../DataContext';

const SalaryRangeInput = () => {
    const { minSalary, setMinSalary, maxSalary, setMaxSalary, } = useContext(DataContext)
    return (
        <span className='salaryInputCont'>
            <p className='title'>Salary Range LPA</p>
            <span className="salaryInput">
                <input type="number" placeholder="&darr;&uarr; &#8377;0"
                    value={minSalary}
                    onChange={(e) => setMinSalary(e.target.value)}
                    required />
                <input type="number" placeholder="&darr;&uarr; &#8377;12,00,000"
                    value={maxSalary}
                    onChange={(e) => setMaxSalary(e.target.value)}
                    required />
            </span>
        </span>
    )
}

export default SalaryRangeInput;