import { create } from "zustand";

interface StoreState {
    letter: string;
    txtLetter: string;
    setTxtLetter: (txtLetter: string) => void;
    setLetter: (letter: string) => void;
}

export const useLetterstore = create<StoreState>((set)=>({
    letter: "",
    txtLetter: "",
    setLetter: (letter: string) => set((state) => ({ letter: letter })),
    setTxtLetter: (txtLetter: string) => set((state) => ({ txtLetter: txtLetter }))
})) 

