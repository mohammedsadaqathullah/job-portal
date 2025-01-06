import { useContext, useState } from 'react';
import draftbtn from './draftbtn.png';
import publishbtn from './publishbtn.png';
import DataContext from './DataContext';

import './JobAdding.css';

function JobAdding() {
    const { dateClass, setDateClass, jobAddingBox, setJobAddingBox, randomID, setDatas } = useContext(DataContext);

    const handleapplicationdeadline = (e) => {
        setDeadline(e.target.value);
        setDateClass('dateNotShow');
    }

    const [jobTitle, setJobTitle] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [location, setLocation] = useState('');
    const [jobType, setJobType] = useState('');
    const [minSalary, setMinSalary] = useState('');
    const [maxSalary, setMaxSalary] = useState('');
    const [deadline, setDeadline] = useState('');
    const [jobDescription, setJobDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const jobData = {
            profile: "",
            jobRole: jobTitle,
            experience: "1-3 yr Exp",
            workLocation: location,
            salaryLPA: `${minSalary}-${maxSalary} LPA`,
            descriptionOne: jobDescription
        };

        try {
            const response = await fetch('http://localhost:5000/api/add-job', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jobData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit job data');
            }

            const result = await response.json();
            alert('Job successfully added!');
            setJobAddingBox('NotShowBox');
            setTimeout(() => {
                setJobTitle('')
                setCompanyName('')
                setLocation('')
                setJobType('')
                setMinSalary('')
                setMaxSalary('')
                setDeadline('')
                setJobDescription('')
            }, 5000)

            setDatas(prevDatas => [...prevDatas, result.job]);

        } catch (error) {
            console.error('Error adding job:', error);
            alert('Failed to add job. Please try again.');
        }
    };


    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="JobAddingContainer" id={jobAddingBox}>
                <div className='JobAddingInnerContainer'>
                    <span className='lineZero'>
                        <h1 className='JobAddingHeading'>Create Job Opening</h1>
                        <span className='closeSymbol' onClick={() => setJobAddingBox('NotShowBox')}>X</span>
                    </span>
                    <span className='lineOne'>
                        <span className='inputBoxCont'>
                            <p className='title'>Job Title</p>
                            <input type="text"
                                placeholder='Web Developer, Graphic Designer'
                                className='inputBox'
                                value={jobTitle}
                                onChange={(e) => setJobTitle(e.target.value)}
                                required />
                        </span>
                        <span className='inputBoxCont'>
                            <p className='title'>Company Name</p>
                            <input type="text"
                                placeholder='Amazon, Microsoft, Swiggy'
                                className='inputBox'
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                required />
                        </span>
                    </span>
                    <span className="lineTwo">
                        <span className="inputBoxCont">
                            <p className='title'>Location</p>
                            <select name="loc" className='dropDownInputBox'
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                required>
                                <option value="" >
                                    Choose Preferred Location
                                </option>
                                <option value="Onsite" className='option2'>Chennai</option>
                            </select>
                        </span>

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
                    </span>
                    <span className="lineThree">
                        <span>
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
                        <span className='application'>
                            <p className='title'>
                                Application Deadline
                            </p>
                            <input id='date' type="date"
                                value={deadline}
                                onChange={(e) => handleapplicationdeadline(e)}
                                className={dateClass} />
                        </span>
                    </span>
                    <span className='lineFour'>
                        <span>
                            <p className='title'>Job Description</p>
                            <textarea
                                placeholder='Please share a description to let the candidate know more about the job role'
                                value={jobDescription}
                                onChange={(e) => setJobDescription(e.target.value)}
                                required>
                            </textarea>
                        </span>
                    </span>
                    <span className="lineFive">
                        <span className='draftbtnContainer'>
                            <p className='draftbtn'>Save Draft <img src={draftbtn} /> </p>
                        </span>
                        <span className="publishbtnContainer">
                            <button className='publishbtn'
                                onClick={() => handleReset()}
                            >Publish <img src={publishbtn} /></button>
                        </span>
                    </span>
                </div>
            </div >
        </form>
    )
}
export default JobAdding;
