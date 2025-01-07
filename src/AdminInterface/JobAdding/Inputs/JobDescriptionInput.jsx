import React, { useContext } from 'react'
import DataContext from '../../DataContext';

const JobDescriptionInput = () => {
    const { jobDescription, setJobDescription, } = useContext(DataContext)
    return (
        <span>
            <p className='title'>Job Description</p>
            <textarea
                placeholder='Please share a description to let the candidate know more about the job role'
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                required>
            </textarea>
        </span>
    )
}

export default JobDescriptionInput;