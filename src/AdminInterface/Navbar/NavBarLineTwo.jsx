import { useContext } from "react"
import SearchIcon from "./SearchIcon"
import LocationIcon from "./LocationIcon"
import JobTypeIcon from "./JobTypeIcon"
import RangeSlider from "./RangeSlider"
import NavBarLineTwoLocationInput from "./NavBarLineTwoLocationInput"
import NavBarLineTwoJobTypeInput from "./NavBarLineTwoJobTypeInput"
import DataContext from "../DataContext"


function NavBarLineTwo() {
    // const { minRange, maxRange, setMinRange, setMaxRange } = useContext(DataContext)
    const { value } = useContext(DataContext)

    return (
        <>
            <li>
                <label className="searchContainer">
                    <span>
                        <SearchIcon />
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
                        <LocationIcon />
                    </span>
                    <span >
                        <NavBarLineTwoLocationInput />
                    </span>

                </li>
            </label >
            <label >
                <li className="navjobtypecontainer">
                    <span>
                        <JobTypeIcon />
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