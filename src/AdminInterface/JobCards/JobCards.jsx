import { useContext, useState } from 'react';
import profile1 from '../Images/profile1.png';
import ExperienceIcon from '../Images/ExperienceIcon';
import WorkLocationIcon from '../Images/WorkLocationIcon';
import SalaryIcon from '../Images/SalaryIcon';
import { Link } from 'react-router-dom';
import DataContext from '../DataContext';
import './jobcards.css';

function Jobcards() {
    const { datas, handleDelete,
        setEditID, setTrigger } = useContext(DataContext);


    function handleEditBtn(id) {
        setEditID(id)
        setTrigger(prev => !prev);
    }

    return (
        <div className="cardsContainer"
        >
            {datas.map((data, index) => (
                <div className="card" key={data._id || `${data.jobRole}-${index}`}>
                    <span >
                        <img src={data.profile || profile1} alt={data.jobRole} style={{ width: '83.46px' }} className='profile' />
                        <span
                            className='postTime'
                        >
                            24h Ago
                        </span>
                    </span>
                    <h3 className='jobRole'
                    >
                        {data.jobRole}</h3>
                    <p className='secondRow'
                    >
                        <span className='experience'

                        >
                            <ExperienceIcon /> {data.experience}
                        </span>
                        <span className="worklocation"

                        >
                            <WorkLocationIcon /> {data.workLocation}
                        </span>
                        <span className='salaryLPA'

                        >
                            <SalaryIcon /> {data.salaryLPA}
                        </span>
                    </p>
                    <ul className='description'


                    >
                        <li>{data.descriptionOne}</li>
                        <li>{data.descriptionTwo || "Only shortlisted candidates will be contacted."}</li>
                    </ul>
                    <ul className='btnContainer'>
                        <li>
                            <button className='deletebtn'
                                onClick={() => handleDelete(data._id)}>
                                Delete Job</button>
                        </li>
                        <li>
                            <Link to="/update">
                                <button className='Editbtn'
                                    onClick={() => handleEditBtn(data._id)} >
                                    Edit
                                </button>
                            </Link>
                        </li>
                    </ul>

                </div>
            ))}
        </div>
    );
}

export default Jobcards;
