import { Dispatch, SetStateAction } from "react";

export type Store = {
    isShuffle: boolean;
    isRepeat: boolean;
    setShuffle: Dispatch<SetStateAction<boolean>>;
    setRepeat: Dispatch<SetStateAction<boolean>>;
}