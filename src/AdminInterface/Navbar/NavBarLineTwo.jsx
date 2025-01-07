import { useContext } from "react"
import searchicon from '../Images/search.png'
import locationicon from '../Images/location.png'
import jobtypeicon from '../Images/jobtype.png'
import DataContext from "../DataContext"

function NavBarLineTwo() {
    const { minRange, maxRange, setMinRange, setMaxRange } = useContext(DataContext)

    return (
        <>
            <li>
                <label>
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
                <li>

                    <span>
                        <img
                            src={locationicon}
                            alt="location icon"
                            className="locationicon" />
                    </span>
                    <select
                        name="Preferred Location"
                        className="location">
                        <option value="*">
                            Preferred Location
                        </option>
                    </select>
                </li>
            </label >
            <label >

                <li>
                    <span>
                        <img
                            src={jobtypeicon}
                            alt="jobtype icon"
                            className="jobtypeicon" />
                    </span>

                    <select
                        name="Job Type"
                        className="jobtype">
                        <option value="*">
                            Job Type
                        </option>

                    </select>
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
                                    {minRange}K - {maxRange}K</span></p>
                        </span>
                        <span>

                            <input
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
                                className="rangetwo" />

                        </span>
                    </span>
                </li>
            </label>
        </>
    )
}
export default NavBarLineTwo;