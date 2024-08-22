import { create } from "zustand";

// Стор для управления светом на сцене
type LightControlStore = {
  isLightEnabled: boolean;
  toggleLight: () => void;
};

type PerspectiveCameraControlProps = {
  isPerspectiveCameraControlEnabled: boolean;
  togglePerspectiveCameraControl: () => void;
};

type CameraControlStore = {
  isCameraControlEnabled: boolean;
  toggleCameraControl: () => void;
};

type BackgroundStoreProps = {
  isBackgroundEnabled: boolean;
  toggleBackground: () => void;
};

export const useLightControl = create<LightControlStore>((set) => ({
  isLightEnabled: true,
  toggleLight: () =>
    set((state) => ({ isLightEnabled: !state.isLightEnabled })),
}));

// ----------------

// Стор для управления камерой на сцене

export const useCameraControl = create<CameraControlStore>((set) => ({
  isCameraControlEnabled: true,
  toggleCameraControl: () =>
    set((state) => ({ isCameraControlEnabled: !state.isCameraControlEnabled })),
}));

// ----------------

// стор для управления перспективной камерой

export const usePerspectiveCameraControl =
  create<PerspectiveCameraControlProps>((set) => ({
    isPerspectiveCameraControlEnabled: true,
    togglePerspectiveCameraControl: () =>
      set((state) => ({
        isPerspectiveCameraControlEnabled:
          !state.isPerspectiveCameraControlEnabled,
      })),
  }));

// -----------------------------------------------------------------------------------------------------

type CheckboxProps = PerspectiveCameraControlProps &
  CameraControlStore &
  LightControlStore;

export const useCheckboxControl = create<CheckboxProps>((set) => ({
  isPerspectiveCameraControlEnabled: true,
  isCameraControlEnabled: true,
  isLightEnabled: true,

  togglePerspectiveCameraControl: () =>
    set((state) => ({
      isPerspectiveCameraControlEnabled:
        !state.isPerspectiveCameraControlEnabled,
    })),


  toggleCameraControl: () =>
    set((state) => ({ isCameraControlEnabled: !state.isCameraControlEnabled })),

  toggleLight: () =>
    set((state) => ({ isLightEnabled: !state.isLightEnabled })),
}));

// ----------------

// стор для Input type Range

type RangeInputProps = {
  scaleValue: number;
  setScaleValue: (value: number) => void;

  lightValue: number;
  setLightValue: (value: number) => void;
};

export const RangeInputStore = create<RangeInputProps>((set) => ({
  scaleValue: 10, // начальное значение
  setScaleValue: (value) => set({ scaleValue: value }),

  lightValue: 15, // начальное значение
  setLightValue: (value) => set({ lightValue: value }),
}));