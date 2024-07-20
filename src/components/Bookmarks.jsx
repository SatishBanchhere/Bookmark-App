import { useContext, useState, useEffect } from "react";
import DeletedModeContext from "../Context APIs/DeleteMode";

export function Bookmarks({ onClose }) {
    const [websiteName, setWebsiteName] = useState('');
    const [websiteLink, setWebsiteLink] = useState('');
    const [bookmarks, setBookmarks] = useState([
        { webName: "Leetcode", Link: "https://leetcode.com/" },
        { webName: "YouTube", Link: "https://www.youtube.com/" },
        { webName: "Google", Link: "https://www.google.com/" },
        { webName: "Facebook", Link: "https://www.facebook.com/" },
        { webName: "Twitter", Link: "https://www.twitter.com/" }
    ]);
    const { newBookmark, setnewBookmark } = useContext(DeletedModeContext);

    useEffect(() => {
        const saveBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        if (saveBookmarks && saveBookmarks.length > 0) {
            setBookmarks(saveBookmarks);
        }
    }, []);

    function handleBookmark() {
        if (websiteName.trim() !== '' && websiteLink.trim() !== '') {
            const newBookmark = {
                webName: websiteName,
                Link: websiteLink
            };

            const updatedBookmarks = [...bookmarks, newBookmark];
            setBookmarks(updatedBookmarks);

            localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
            setnewBookmark(c => !c);
            setWebsiteName('');
            setWebsiteLink('');

            alert('Bookmark added');
        } else {
            alert('Please enter both a website name and link.');
        }
        onClose();
    }

    // Close modal when clicking outside of the box
    function handleOverlayClick(e) {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-40"
            onClick={handleOverlayClick}
        >
            <div className="bg-white text-center p-4 rounded-lg shadow-lg relative w-80">
                <button
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-3xl font-bold select-none"
                    onClick={onClose}
                >
                    &times;
                </button>

                <div>
                    <input
                        value={websiteName}
                        onChange={(e) => setWebsiteName(e.target.value)}
                        placeholder="Website Name"
                        className="m-2 border-2 border-gray-300 rounded-md px-2 bg-gray-100 placeholder-gray-600 focus:outline-none select-none"
                        type="text"
                    />
                </div>
                <div>
                    <input
                        value={websiteLink}
                        onChange={(e) => setWebsiteLink(e.target.value)}
                        placeholder="Website Link"
                        className="m-2 border-2 border-gray-300 rounded-md px-2 bg-gray-100 placeholder-gray-600 focus:outline-none select-none"
                        type="text"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        className="m-2 border-2 border-gray-300 rounded-md bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 cursor-pointer transition duration-300 ease-in-out"
                        onClick={handleBookmark}
                    >
                        Add Bookmark
                    </button>
                </div>
            </div>
        </div>
    );
}
