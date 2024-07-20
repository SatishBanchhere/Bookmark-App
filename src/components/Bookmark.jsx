import { useContext, useEffect, useState } from "react";
import DeletedModeContext from "../Context APIs/DeleteMode";

export function MyData() {
  const [bookmarks, setBookmarks] = useState([
    { webName: "Leetcode", Link: "https://leetcode.com/" },
    { webName: "YouTube", Link: "https://www.youtube.com/" },
    { webName: "Google", Link: "https://www.google.com/" },
    { webName: "Facebook", Link: "https://www.facebook.com/" },
    { webName: "Twitter", Link: "https://www.twitter.com/" }
  ]);

  const { deleteMode, setDeleteMode, newBookmark } = useContext(DeletedModeContext);

  useEffect(() => {
    const saveBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    if (saveBookmarks && saveBookmarks.length > 0 && JSON.stringify(saveBookmarks) !== JSON.stringify(bookmarks)) {
      setBookmarks(saveBookmarks);
    }
  }, [newBookmark]);

  function handleDeleteBookmark({ webName, Link }) {
    const updatedBookmarks = bookmarks.filter(bookmark => !(bookmark.webName === webName && bookmark.Link === Link));
    setBookmarks(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  }

  return (
    <>
      {bookmarks.map((d, index) => (
        deleteMode
          ? <Card2 key={index} webName={d.webName} Link={d.Link} handleDeleteBookmark={handleDeleteBookmark} className="grid-rows-1" />
          : <Card key={index} webName={d.webName} Link={d.Link} handleDeleteBookmark={handleDeleteBookmark} deleteMode={deleteMode} />
      ))}
    </>
  );
}

function Card({ webName, Link, handleDeleteBookmark, deleteMode }) {
  const image = `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${Link}&size=50`;

  return (
    <a className={` z-30 group py-5 m-4 border-2 text-center px-10 text-black border-gray-300 bg-white shadow-md hover:bg-green-600 hover:text-white rounded-xl transition-all duration-300 transform ${deleteMode ? 'hidden' : ''}`} href={Link}>
      <div className="flex items-center justify-center">
        <img src={image} className="h-10 transition-transform duration-300 group-hover:scale-125" alt={webName} />
        <div className="pl-2 text-lg group-hover:text-white transition-all duration-300 flex items-center">
          {webName}
        </div>
      </div>
    </a>
  );
}

function Card2({ webName, Link, handleDeleteBookmark }) {
  const image = `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${Link}&size=50`;
  const [text, setText] = useState("");

  return (
    <button onClick={() => handleDeleteBookmark({ webName, Link })} onMouseEnter={() => setText("Delete?")} onMouseLeave={() => setText("")} className="group py-5 m-4 border-2 text-center px-10 text-black border-gray-300 bg-white shadow-md hover:bg-red-600 hover:text-white rounded-xl transition-all duration-300 transform">
      <div className="flex items-center justify-center">
        <img src={image} className="h-10 transition-transform duration-300 group-hover:scale-125" alt={webName} />
        <div className="pl-2 text-lg group-hover:text-white transition-all duration-300 flex items-center">
          {text === "" ? webName : text}
        </div>
      </div>
    </button>
  );
}
