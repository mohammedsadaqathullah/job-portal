import { useContext, useState } from "react"
import logoicon from "./logo.png"
import searchicon from './search.png'
import locationicon from './location.png'
import jobtypeicon from './jobtype.png'
import MultiRangeSlider from "multi-range-slider-react"
import './navbar.css'
import DataContext from "./DataContext"

function Navbar() {
    const { minRange, maxRange, setMinRange, setMaxRange, setJobAddingBox } = useContext(DataContext)
    return (
        <>
            <nav className='navbody'>
                <ul className='navulone'>
                    <li>
                        <img
                            src={logoicon}
                            alt="logo"
                            className="logoicon" />
                    </li>
                    <span className="navuloneitems">
                        <li className="liItems">Home</li>
                        <li className="liItems">Find Jobs</li>
                        <li className="liItems">Find Talents</li>
                        <li className="liItems">About us</li>
                        <li className="liItems">Testimonials</li>
                    </span>
                    <li>
                        <button
                            onClick={() => setJobAddingBox('ShowBox')}
                            className="createjobstext">
                            Create Jobs </button>
                        <button className="logintext">
                            Login
                        </button>
                    </li>
                </ul>
                <ul className="navultwo">
                    <li>
                        <span>
                            <img
                                src={searchicon}
                                alt="searchicon" />
                        </span>
                        <input
                            type="search"
                            placeholder="Search By Job Title,Role"
                            className="search"
                            required />
                    </li>
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
                </ul>

            </nav>

        </>
    )
}
export default Navbar;