import { useState } from 'react'
import './App.css'
import { MyData } from './components/Bookmark'
import { TopBar } from './components/TopBar'
import { Add } from './components/Add'
import { DeletedProvider } from './Context APIs/DeleteMode'

function App() {
  const [AddBookMark, setAdd] = useState(true)
  

  return (
    <DeletedProvider>
      <div className='bg-B5 min-h-screen'>
        <TopBar setAdd={setAdd}></TopBar>
        <Add Add={AddBookMark}></Add>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 '>
          <MyData></MyData>
        </div>
      </div>
    </DeletedProvider>
  )
}


export default App
