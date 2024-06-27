import { useState } from 'react';
import './App.css';
import { MyData } from './components/Bookmark';
import { TopBar } from './components/TopBar';
import { Add } from './components/Add';
import { DeletedProvider } from './Context APIs/DeleteMode';

function App() {
  const [AddBookMark, setAdd] = useState(true);

  return (
    <DeletedProvider>
      <div className='bg-gray-200 min-h-screen'>
        {/* Adjust background color using Tailwind CSS classes */}
        <TopBar setAdd={setAdd}></TopBar>
        <Add Add={AddBookMark}></Add>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>
          {/* Adjust grid and card colors using Tailwind CSS classes */}
          <MyData></MyData>
        </div>
      </div>
    </DeletedProvider>
  );
}

export default App;
