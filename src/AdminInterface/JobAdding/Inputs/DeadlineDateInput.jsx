import React, { useContext } from 'react'
import DataContext from '../../DataContext';

const DeadlineDateInput = () => {
    const { handleapplicationdeadline, deadline, dateClass } = useContext(DataContext)
    return (
        <span className='application'>
            <p className='title'>
                Application Deadline
            </p>
            <input id='date' type="date"
                value={deadline}
                onChange={(e) => handleapplicationdeadline(e)}
                className={dateClass} />
        </span>
    )
}

export default DeadlineDateInput;