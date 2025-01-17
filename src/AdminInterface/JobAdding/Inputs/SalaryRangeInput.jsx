import React, { useContext } from 'react'
import DataContext from '../../DataContext';

const SalaryRangeInput = () => {
    const { salary, setSalary } = useContext(DataContext)
    return (
        <span className='salaryInputCont'>
            <p className='title'>Salary Range LPA</p>
            <span className="salaryInput">
                <input type="number" min={2} max={35} placeholder="&darr;&uarr; &#8377;0"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    required />
            </span>
        </span>
    )
}

export default SalaryRangeInput;