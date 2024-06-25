import { createContext, useState } from "react";

const DeletedModeContext = createContext();


export function DeletedProvider({ children }) {
    const [deleteMode, setDeleteMode] = useState(false);
    const [newBookmark, setnewBookmark] = useState(false);

    return (<DeletedModeContext.Provider value={{deleteMode, setDeleteMode, newBookmark, setnewBookmark}}>
        {children}
    </DeletedModeContext.Provider>);
};

export default DeletedModeContext;