import React, { useContext, useState, useEffect } from 'react';
import DataContext from '../DataContext';
import './jobcardsedit.css';
import Navbar from '../Navbar/Navbar';

const JobCardsEdit = () => {
    const { EditableDatas, handleUpdates } = useContext(DataContext);

    const [formData, setFormData] = useState({
        jobRole: '',
        experience: '',
        workLocation: '',
        salaryLPA: '',
        descriptionOne: '',
    });

    // Use `useEffect` to populate `formData` when `EditableDatas` changes
    useEffect(() => {
        if (EditableDatas) {
            setFormData({
                jobRole: EditableDatas.jobRole || '',
                experience: EditableDatas.experience || '',
                workLocation: EditableDatas.workLocation || '',
                salaryLPA: EditableDatas.salaryLPA || '',
                descriptionOne: EditableDatas.descriptionOne || '',
            });
        }
    }, [EditableDatas]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <>
            <Navbar />
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleUpdates(formData); // Pass updated form data
                }}
                style={{ display: EditableDatas && EditableDatas.jobRole ? 'block' : 'none' }}
            >
                <div>
                    <div className="cardEditContainer">
                        <span>
                            <p>Job Role :</p>
                            <input
                                type="text"
                                name="jobRole"
                                placeholder="Job Role"
                                value={formData.jobRole}
                                onChange={handleInputChange}
                                required
                            />
                        </span>
                        <span>
                            <p>Experience :</p>
                            <input
                                type="text"
                                name="experience"
                                placeholder="Experience"
                                value={formData.experience}
                                onChange={handleInputChange}
                                required
                            />
                        </span>
                        <span>
                            <p>Location :</p>
                            <select
                                name="workLocation"
                                value={formData.workLocation}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="" disabled>
                                    Select Location
                                </option>
                                <option value="Chennai">Chennai</option>
                                <option value="Coimbatore">Coimbatore</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Work From Home">Work From Home</option>
                            </select>
                        </span>
                        <span>
                            <p>Salary : (Should be between 2.5 - 35 LPA)</p>
                            <input
                                type="text"
                                name="salaryLPA"
                                placeholder="Salary"
                                value={formData.salaryLPA}
                                onChange={handleInputChange}
                                required
                            />
                        </span>
                        <span>
                            <p>Description :</p>
                            <textarea
                                name="descriptionOne"
                                placeholder="Description"
                                value={formData.descriptionOne}
                                onChange={handleInputChange}
                                required
                            />
                        </span>
                        <span>
                            <button type="submit">Update</button>
                        </span>
                    </div>
                </div>
            </form>
        </>
    );
};

export default JobCardsEdit;
