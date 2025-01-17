
import JobcCardsEdit from './AdminInterface/JobCards/JobcCardsEdit'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DataProvider } from './AdminInterface/DataContext'
import './App.css'
import Homepage from './Homepage'

function App() {


  return (
    <>



      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/update' element={<JobcCardsEdit />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  )
}

export default App
