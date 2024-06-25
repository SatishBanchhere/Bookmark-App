import { createContext, useState } from "react";

const DeletedModeContext = createContext();

import reactLogo from '../assets/react.svg'

export function DeletedProvider({ children }) {
    const [deleteMode, setDeleteMode] = useState(false);
    const [newBookmark, setnewBookmark] = useState(false);
    const [logo, setLogo] = useState(reactLogo);

    return (<DeletedModeContext.Provider value={{deleteMode, setDeleteMode, newBookmark, setnewBookmark, logo}}>
        {children}
    </DeletedModeContext.Provider>);
};

export default DeletedModeContext;