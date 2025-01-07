import React, { useContext } from 'react'
import DataContext from '../../DataContext';

const JobTypeInput = () => {
    const { jobType, setJobType, } = useContext(DataContext)
    return (
        <span>
            <span className="inputBoxCont">
                <p className='title'>Job Type</p>
                <select name="loc" className='dropDownInputBox'
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    required>
                    <option value="Internship">Internship</option>
                    <option value="" >
                        Full Time
                    </option>
                    <option value="PartTime" className='option2'>Part Time</option>
                    <option value="Contract">Contract</option>
                </select>
            </span>
        </span>
    )
}

export default JobTypeInput;