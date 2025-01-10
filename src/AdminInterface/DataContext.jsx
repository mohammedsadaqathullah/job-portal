
import { createContext, useState, useEffect } from "react";
import { useId } from 'react';

const DataContext = createContext({})

export const DataProvider = ({ children }) => {
    //Navbar
    const [dummy, setDummy] = useState('')
    const [dummyTwo, setDummyTwo] = useState('')
    const [minRange, setMinRange] = useState(25);
    const [maxRange, setMaxRange] = useState(50);
    const [value, setValue] = useState([50, 80]); // Initial values for the range
    const [locationOpen, setLocationOpen] = useState(false)
    const [jobTypeOpen, setJobTypeOpen] = useState(false)

    //JobCards
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true);
    const randomID = useId();

    //JobAdding
    const [dateClass, setDateClass] = useState('dateShow')
    const [jobAddingBox, setJobAddingBox] = useState('NotShowBox')
    const [jobTitle, setJobTitle] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [location, setLocation] = useState('');
    const [jobType, setJobType] = useState('');
    const [minSalary, setMinSalary] = useState('');
    const [maxSalary, setMaxSalary] = useState('');
    const [deadline, setDeadline] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [openOne, setOpenOne] = useState(false);
    const [openTwo, setOpenTwo] = useState(false);

    //Navbars
    const handleLocationOpen = () => {
        setLocationOpen(true);
    };
    const handleLocationClose = () => {
        setLocationOpen(false);
    };
    const handleJobTypeOpen = () => {
        setJobTypeOpen(true);
    };
    const handleJobTypeClose = () => {
        setJobTypeOpen(false);
    };



    //JobCards
    async function handlingdatas() {
        try {
            const response = await fetch('https://admin-interface-backend.onrender.com/users');
            const data = await response.json();
            setDatas(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            handlingdatas();
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <div className="spinner"></div>;
    }


    //JobAdding
    const randomIDs = () => {
        return 'job-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
    };

    const handleapplicationdeadline = (e) => {
        setDeadline(e.target.value);
        setDateClass('dateNotShow');
    }

    const handleSubmit = async (e) => {
        let averageSalaryCalc = () => {
            return (parseInt(minSalary) + parseInt(maxSalary)) / 2;
        }
        let averageSalary = averageSalaryCalc();
        e.preventDefault();
        const jobData = {
            _id: randomIDs(),
            profile: "https://i.postimg.cc/7ZbM1xz1/swiggy.jpg",
            jobRole: jobTitle,
            experience: "1-3 yr Exp",
            workLocation: location,
            salaryLPA: `${averageSalary}LPA`,
            descriptionOne: jobDescription,
            descriptionTwo: "Filter destinations based on interests and travel style, and create personalized",
            jobs: []
        };

        // Log jobData before sending to the server
        console.log("Job Data to be submitted:", jobData);

        try {
            const response = await fetch('https://admin-interface-backend.onrender.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jobData),
            });

            // Log the response from the backend
            const responseBody = await response.json();
            console.log("Backend Response:", responseBody);

            if (!response.ok) {
                throw new Error('Failed to submit job data');
            }

            alert('Job successfully added!');
            setJobAddingBox('NotShowBox');
            setTimeout(() => {
                setJobTitle('');
                setCompanyName('');
                setLocation('');
                setJobType('');
                setMinSalary('');
                setMaxSalary('');
                setDeadline('');
                setJobDescription('');
            }, 5000);

            setDatas(prevDatas => [...prevDatas, responseBody.user]);

        } catch (error) {
            console.error('Error adding job:', error);
            alert('Failed to add job. Please try again.');
        }
    };
    //jobadding handling
    const handleChangeOne = (event) => {
        setJobType(event.target.value);
    };

    const handleChangeTwo = (event) => {
        setLocation(event.target.value);
    };

    const handleCloseOne = () => {
        setOpenOne(false);
    };

    const handleCloseTwo = () => {
        setOpenTwo(false);
    };
    const handleOpenOne = () => {
        setOpenOne(true);
    };
    const handleOpenTwo = () => {
        setOpenTwo(true);
    };

    //handledelete
    const handleDelete = async (id) => {
        try {
            console.log("Deleting job with ID:", id); // Check if this logs the correct ID
            const response = await fetch(`https://admin-interface-backend.onrender.com/users/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setDatas(prevDatas => prevDatas.filter(job => job._id !== id));
                alert('Job deleted successfully!');
            } else {
                throw new Error('Failed to delete job');
            }
        } catch (error) {
            console.error('Error deleting job:', error);
            alert('Failed to delete job. Please try again.');
        }
    };
    // Handler to update the range values
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <DataContext.Provider value={({
            //JObAdding
            dateClass, jobAddingBox, setDateClass, setJobAddingBox,
            handleapplicationdeadline, jobTitle, setJobTitle,
            companyName, setCompanyName,
            location, setLocation, jobType, setJobType,
            minSalary, setMinSalary, maxSalary, setMaxSalary,
            deadline, jobDescription, setJobDescription,
            handleSubmit, handleChangeOne, handleChangeTwo,
            handleCloseOne, handleCloseTwo, handleOpenOne, handleOpenTwo, openOne,
            openTwo,

            //Navabar
            minRange, maxRange, setMinRange, setMaxRange,
            handleChange, value, dummy, setDummy,
            locationOpen, handleLocationClose, handleLocationOpen,
            jobTypeOpen, handleJobTypeClose, handleJobTypeOpen, dummyTwo, setDummyTwo,

            //JobCards 
            datas, handleDelete

        })}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext