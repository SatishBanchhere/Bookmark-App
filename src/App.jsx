import { useState } from 'react';
import './App.css';
import { MyData } from './components/Bookmark';
import { TopBar } from './components/TopBar';
import { Add } from './components/Add';
import { DeletedProvider } from './Context APIs/DeleteMode';
import { Bookmarks } from './components/Bookmarks';

function App() {
  const [AddBookMark, setAdd] = useState(false);
  console.log(AddBookMark);
  return (
    <DeletedProvider>
      <div className='bg-gray-200 min-h-screen'>
        {/* Adjust background color using Tailwind CSS classes */}
        <TopBar add={AddBookMark} setAdd={setAdd}></TopBar>
        {/* <Bookmarks></Bookmarks> */}
        {/* <Add Add={AddBookMark} setAdd={setAdd}></Add> */}
        <div className='z-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>
          {/* Adjust grid and card colors using Tailwind CSS classes */}
          <MyData></MyData>
        </div>
      </div>
    </DeletedProvider>
  );
}

export default App;
