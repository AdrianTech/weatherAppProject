import React from "react";

export const ActionsContext = React.createContext({});

export const ActionsContextProvider = (props) => {
    const [page, setPage] = React.useState(1);

    const setPageHandle = (step) => {
        if (step === 'back') return setPage(page => page - 1);
        setPage(page => page + 1);
    }

    return <ActionsContext.Provider value={{ setPageHandle, page }} >{props.children}</ActionsContext.Provider>
}

