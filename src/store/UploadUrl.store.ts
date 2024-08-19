import { create } from "zustand";

type Url = {
  StateUrl: string;
};

type UploadProps = {
  updateUrl: (url: string) => void;
};

export const useUploadUrl = create<Url & UploadProps>((set) => ({
  StateUrl: "",
  updateUrl: (url: string) => set(() => ({ StateUrl: url })),
}));