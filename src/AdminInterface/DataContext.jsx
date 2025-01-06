import { createContext, useState, useEffect } from "react";
import { useId } from 'react';

const DataContext = createContext({})

export const DataProvider = ({ children }) => {
    const [dateClass, setDateClass] = useState('dateShow')
    const [jobAddingBox, setJobAddingBox] = useState('NotShowBox')

    //navbar datas
    const [minRange, setMinRange] = useState(25);
    const [maxRange, setMaxRange] = useState(50)
    function handleAddingJobs() {

    }

    //Jobcards datas
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true);
    const randomID = useId();

    async function handlingdatas() {
        try {
            const response = await fetch('http://localhost:5000/api/users');
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
    //posting Datas



    return (
        <DataContext.Provider value={({
            dateClass, jobAddingBox, setDateClass, setJobAddingBox,
            //Navabar datas
            minRange, maxRange, setMinRange, setMaxRange,
            //JobCards Datas
            datas, setDatas, loading, setLoading, randomID

        })}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext