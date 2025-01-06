
import JobCards from './AdminInterface/Jobcards'
import JobAdding from './AdminInterface/JobAdding'
import Navbar from './AdminInterface/Navbar'
import './App.css'
import { DataProvider } from './AdminInterface/DataContext'

function App() {


  return (
    <>
      <DataProvider>
        <Navbar />
        <JobCards />
        <JobAdding />
      </DataProvider>
    </>
  )
}

export default App
