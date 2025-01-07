import React, { useContext } from 'react'
import DataContext from '../../DataContext';

const JobTitleInput = () => {
    const { jobTitle, setJobTitle, } = useContext(DataContext);
    return (
        <span className='inputBoxCont'>
            <p className='title'>Job Title</p>
            <input type="text"
                placeholder='Web Developer, Graphic Designer'
                className='inputBox'
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                required />
        </span>
    )
}

export default JobTitleInput;