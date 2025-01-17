import React from 'react'
import Navbar from './AdminInterface/Navbar/Navbar'
import Jobcards from './AdminInterface/JobCards/JobCards'
import JobAdding from './AdminInterface/JobAdding/JobAdding'

const Homepage = () => {
    return (
        <>
            <Navbar />
            <Jobcards />
            <JobAdding />
        </>
    )
}

export default Homepage