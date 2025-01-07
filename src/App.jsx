
import JobCards from './AdminInterface/JobCards/JobCards'
import JobAdding from './AdminInterface/JobAdding/JobAdding'
import Navbar from './AdminInterface/Navbar/Navbar'
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
