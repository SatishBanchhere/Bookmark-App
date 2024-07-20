import { useContext, useState } from "react";
import DeletedModeContext from "../Context APIs/DeleteMode";
import { Bookmarks } from "./Bookmarks";
import { MyData } from "./Bookmark";

export function TopBar({ add, setAdd }) {
    const { deleteMode, setDeleteMode } = useContext(DeletedModeContext);
    const [isBookmarksVisible, setBookmarksVisible] = useState(add);
    function deleteButtonClickHandle() {
        setDeleteMode(prev => !prev);
        console.log(`Delete Mode is ${deleteMode}`);
    }

    function closeBookmarks() {
        setBookmarksVisible(false);
        setAdd(false);
    }

    return (
        <>
            <>
                <div className="flex items-center p-4 bg-gradient-to-r from-teal-500 to-teal-700 border-b-4 border-teal-900 text-white shadow-lg select-none">
                    <div className="flex-none">
                        <TopButtons1
                            onClick={() => {
                                console.log("Add button clicked");
                                setBookmarksVisible(true);
                                setAdd(true);
                            }}
                            title={"Add"}
                        />
                    </div>
                    <div className="flex-grow flex justify-center">
                        <p className="text-gray-100 text-2xl font-semibold">Bookmarks Online</p>
                    </div>
                    <div className="flex-none">
                        {deleteMode ? (
                            <TopButtons2
                                title={"Delete mode is on"}
                                onClick={deleteButtonClickHandle}
                            />
                        ) : (
                            <TopButtons1
                                title={"Delete"}
                                onClick={deleteButtonClickHandle}
                            />
                        )}
                    </div>
                </div>
                {isBookmarksVisible && <Bookmarks onClose={closeBookmarks} />}
            </>
            {/* <>
                {!isBookmarksVisible && <MyData></MyData>}
            </> */}
        </>
    );
}

function TopButtons1({ title, onClick }) {
    return (
        <div
            className="border-2 border-teal-900 p-2 m-1 rounded-md bg-teal-600 text-white hover:bg-teal-500 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
            onClick={onClick}
        >
            {title}
        </div>
    );
}

function TopButtons2({ title, onClick }) {
    return (
        <div
            className="border-2 border-teal-900 p-2 m-1 rounded-md bg-red-600 text-white hover:bg-red-500 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
            onClick={onClick}
        >
            {title}
        </div>
    );
}
