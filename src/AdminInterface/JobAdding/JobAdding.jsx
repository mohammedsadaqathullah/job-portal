

import { useContext } from 'react';
// import draftbtn from '../Images/draftbtn.png';
import publishbtn from '../Images/publishbtn.png';
import DataContext from '../DataContext';
import Heading from './Inputs/Heading';
import JobTitleInput from './Inputs/JobTitleInput';
import CompanyNameInput from './Inputs/CompanyNameInput';
import LocationInput from './Inputs/LocationInput';
import JobTypeInput from './Inputs/JobTypeInput';
import SalaryRangeInput from './Inputs/SalaryRangeInput';
import DeadlineDateInput from './Inputs/DeadlineDateInput';
import JobDescriptionInput from './Inputs/JobDescriptionInput';
import './JobAdding.css';

function JobAdding() {
    const { jobAddingBox, handleSubmit, setJobAddingBox }
        = useContext(DataContext);

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="JobAddingContainer" id={jobAddingBox}>
                <span className='closeSymbol'
                    onClick={() => setJobAddingBox('NotShowBox')}>
                    x
                </span>
                <div className='JobAddingInnerContainer'>
                    <Heading />
                    <span className='lineOne'>
                        <JobTitleInput />
                        <CompanyNameInput />
                    </span>
                    <span className="lineTwo">
                        <LocationInput />
                        <JobTypeInput />
                    </span>
                    <span className="lineThree">
                        <SalaryRangeInput />
                        <DeadlineDateInput />
                    </span>
                    <span className='lineFour'>
                        <JobDescriptionInput />
                    </span>
                    <span className="lineFive">
                        {/* <span className='draftbtnContainer'>
                            <p className='draftbtn'
                                onClick={() => setJobAddingBox('NotShowBox')}>
                                Save Draft <img src={draftbtn} /> </p>
                        </span> */}
                        <span className="publishbtnContainer">
                            <button className='publishbtn'
                            >Publish <img src={publishbtn} /></button>
                        </span>
                    </span>
                </div>
            </div >
        </form>
    );
}

export default JobAdding;
