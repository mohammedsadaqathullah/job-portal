import { useContext } from "react"
import searchicon from '../Images/search.png'
import locationicon from '../Images/location.png'
import jobtypeicon from '../Images/jobtype.png'
import RangeSlider from "./RangeSlider"
import NavBarLineTwoLocationInput from "./NavBarLineTwoLocationInput"
import DataContext from "../DataContext"
import NavBarLineTwoJobTypeInput from "./NavBarLineTwoJobTypeInput"


function NavBarLineTwo() {
    // const { minRange, maxRange, setMinRange, setMaxRange } = useContext(DataContext)
    const { value } = useContext(DataContext)

    return (
        <>
            <li>
                <label className="searchContainer">
                    <span>

                        <img
                            src={searchicon}
                            alt="searchicon"
                            className="searchicon" />
                    </span>
                    <input
                        type="search"
                        placeholder="Search By Job Title,Role"
                        className="search"
                        required />
                </label>
            </li >
            <label >
                <li className="navlocationcontainer">

                    <span>
                        <img
                            src={locationicon}
                            alt="location icon"
                            className="locationicon" />
                    </span>
                    <span >
                        <NavBarLineTwoLocationInput />
                    </span>

                </li>
            </label >
            <label >
                <li className="navjobtypecontainer">
                    <span>
                        <img
                            src={jobtypeicon}
                            alt="jobtype icon"
                            className="jobtypeicon" />
                    </span>
                    <NavBarLineTwoJobTypeInput />
                </li>
            </label>
            <label >

                <li className="rangebox">
                    <span>
                        <span>
                            <p className="salaryrangeheadline">
                                <span>
                                    Salary Per Month
                                </span>
                                <span>
                                    {value[0]}K - {value[1]}K</span></p>
                        </span>
                        <span>

                            <RangeSlider />
                            {/* <input
                                type="range"
                                min={10}
                                max={45}
                                step={5}
                                value={minRange}
                                onChange={(e) => setMinRange(e.target.value)}
                                className="rangeone" />
                            <input
                                type="range"
                                min={50}
                                max={100}
                                step={5}
                                value={maxRange}
                                onChange={(e) => setMaxRange(e.target.value)}
                                className="rangetwo" /> */}

                        </span>
                    </span>
                </li>
            </label>
        </>
    )
}
export default NavBarLineTwo;