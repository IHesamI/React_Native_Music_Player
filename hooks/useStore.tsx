import { Store } from "@/constants/types";
import { createContext, useState } from "react";

export const StoreContext = createContext<Store>({
    isRepeat: false,
    isShuffle: false,
    setRepeat: () => { },
    setShuffle: () => { },
});

export const StoreProvider = ({ children }: {
    children: React.ReactNode
}) => {
    const [isShuffle, setShuffle] = useState(false);
    const [isRepeat, setRepeat] = useState(false);

    return <StoreContext.Provider value={{
        isShuffle,
        isRepeat,
        setShuffle,
        setRepeat
    }}>
        {children}
    </StoreContext.Provider>
}