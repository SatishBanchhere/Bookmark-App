import { useContext } from "react";
import DeletedModeContext from "../Context APIs/DeleteMode";

export function TopBar({ setAdd }) {
    const { deleteMode, setDeleteMode } = useContext(DeletedModeContext);

    function deleteButtonClickHandle() {
        setDeleteMode((deleteMode) => !deleteMode);
        console.log(`Delete Mode is ${deleteMode}`);
    }

    return (
        <div className="flex justify-between bg-blue-900 border-2 border-black text-white italic"> {/* Changed background color to blue-900 */}
            <div className="flex">
                <TopButtons1
                    onClick={() => {
                        console.log("lmao");
                        setAdd((add) => !add);
                    }}
                    title={"Add"}
                ></TopButtons1>
            </div>
            <div className="inline-flex items-center justify-center text-3xl">
                <p className="text-green-300">Bookmarks Online</p> {/* Changed text color to green-300 */}
            </div>
            <div>
                {deleteMode ? (
                    <TopButtons2
                        title={"Delete mode is on"}
                        onClick={deleteButtonClickHandle}
                    ></TopButtons2>
                ) : (
                    <TopButtons1
                        title={"Delete"}
                        onClick={deleteButtonClickHandle}
                    ></TopButtons1>
                )}
            </div>
        </div>
    );
}

function TopButtons1({ title, onClick }) {
    return (
        <div className="border-2 border-black p-1 m-1 rounded-md bg-red-700 text-white hover:bg-red-300 hover:text-black cursor-pointer select-none" onClick={onClick}>
            {title}
        </div>
    );
}

function TopButtons2({ title, onClick }) {
    return (
        <div className="border-2 border-black p-1 m-1 rounded-md bg-red-300 text-black cursor-pointer select-none" onClick={onClick}>
            {title}
        </div>
    );
}