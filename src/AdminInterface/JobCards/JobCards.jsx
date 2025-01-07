import { useState, useEffect, useContext } from 'react';
import experience from '../Images/experience.png';
import workLocation from '../Images/workLocation.png';
import salary from '../Images/salary.png';
import profile1 from '../Images/profile1.png';
import DataContext from '../DataContext';
import './jobcards.css';

function Jobcards() {
    const { datas, handleDelete } = useContext(DataContext);

    return (
        <div className="cardsContainer">
            {datas.map((data, index) => (
                <div className="card" key={data._id || `${data.jobRole}-${index}`}>
                    <span>
                        <img src={data.profile || profile1} alt={data.jobRole} style={{ width: '83.46px' }} className='profile' />
                        <span
                            className='postTime'
                            onDoubleClick={() => handleDelete(data._id)}>
                            24h Ago
                        </span>
                    </span>
                    <h3 className='jobRole'>{data.jobRole}</h3>
                    <p className='secondRow'>
                        <span className='experience'>
                            <img src={experience} alt="Experience" />{data.experience}
                        </span>
                        <span className="worklocation">
                            <img src={workLocation} alt="Location" /> {data.workLocation}
                        </span>
                        <span className='salaryLPA'>
                            <img src={salary} alt="Salary" /> {data.salaryLPA}
                        </span>
                    </p>
                    <ul className='description'>
                        <li>{data.descriptionOne}</li>
                        <li>{data.descriptionTwo || "Only shortlisted candidates will be contacted."}</li>
                    </ul>
                    <button className='applybtn'>Apply Now</button>
                </div>
            ))}
        </div>
    );
}

export default Jobcards;
