import { create } from 'zustand'

type controlMeshProps = {
    show: boolean;
    toggleShow: () => void;
};

const controlMeshStore = create<controlMeshProps>((set) => ({
    show: false,
    toggleShow: () => set((state) => ({ show: !state.show})),
}))