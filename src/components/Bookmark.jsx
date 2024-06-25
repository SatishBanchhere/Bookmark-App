import { useContext, useEffect, useState } from "react";
import DeletedModeContext from "../Context APIs/DeleteMode";

// const data = [
//   { webName: "Leetcode", Link: "https://leetcode.com/" },
//   { webName: "YouTube", Link: "https://www.youtube.com/" },
//   { webName: "Google", Link: "https://www.google.com/" },
//   { webName: "Facebook", Link: "https://www.facebook.com/" },
//   { webName: "Twitter", Link: "https://www.twitter.com/" }
// ];

export function MyData() {

  const [bookmarks, setBookmarks] = useState([
    { webName: "Leetcode", Link: "https://leetcode.com/" },
    { webName: "YouTube", Link: "https://www.youtube.com/" },
    { webName: "Google", Link: "https://www.google.com/" },
    { webName: "Facebook", Link: "https://www.facebook.com/" },
    { webName: "Twitter", Link: "https://www.twitter.com/" }
  ]);


  const { deleteMode, setDeleteMode } = useContext(DeletedModeContext);
  const { newBookmark, setnewBookmark } = useContext(DeletedModeContext);

  useEffect(() => {
    const saveBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    if (saveBookmarks && saveBookmarks.length > 0 && JSON.stringify(saveBookmarks) !== JSON.stringify(bookmarks)) {
      setBookmarks(saveBookmarks);
    }
  }, [newBookmark])

  function handleDeleteBookmark({ webName, Link }) {
    const update = bookmarks.filter(bookmark => !(bookmark.webName == webName && bookmark.Link == Link));
    setBookmarks(update);
    localStorage.setItem('bookmarks', JSON.stringify(update));

  }

  if (!deleteMode) {
    return (
      <>
        {bookmarks.map((d, index) => (
          <Card key={index} webName={d.webName} Link={d.Link} />
        ))}
      </>
    );
  }
  else {
    return (
      <>
        {bookmarks.map((d, index) => (
          <Card2 key={index} webName={d.webName} Link={d.Link} handleDeleteBookmark={handleDeleteBookmark}
          />
        ))}
      </>
    );
  }


}
function Card({ webName, Link }) {
  const image = `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${Link}&size=50`;

  return (<>
    <a className="group py-5 m-2 border-2 text-center px-10 text-black border-black bg-B4 hover:bg-customGreen hover:text-customBrown hover:text-2xl rounded-xl" href={Link}>
      {/* <a className="group py-5 m-2 border-2 text-center px-10 text-black border-black bg-B4 hover:bg-customGreen hover:text-customBrown rounded-xl" href={Link}> */}
      <div className="flex">
        <div>
          <img src={image}  className="h-10 group-hover:scale-125 transition-transform duration-300"></img>
        </div>
        <div className="pt-2 pl-2 text-base group-hover:text-2xl transition-all duration-300">
          {webName}
        </div>
      </div>
    </a>
  </>
  );
}
function Card2({ webName, Link, handleDeleteBookmark }) {
  const image = `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${Link}&size=50`;
  const [text, setText] = useState("");

  console.log(text);
  return (
    <button onClick={() => {
      console.log("lmao");
      handleDeleteBookmark({ webName, Link })
    }} onMouseEnter={() => setText("Delete?")} onMouseLeave={() => setText("")} className="group py-5 m-2 border-2 text-center px-10 text-black border-black bg-B4 hover:bg-customGreen hover:text-customBrown hover:text-2xl rounded-xl" href={Link}>
      <div className="flex">
        <img src={image} className="h-10 group-hover:scale-125 transition-transform duration-300"></img>
        <div className="pt-2 pl-2 group-hover:text-xl transition-all duration-300">
          {text == "" ? webName : text}
        </div>
      </div>
    </button>
  );
}