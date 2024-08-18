import { create } from "zustand";

// Стор для управления светом на сцене
type LightControlStore = {
  isLightEnabled: boolean;
  toggleLight: () => void;
};

export const useLightControl = create<LightControlStore>((set) => ({
  isLightEnabled: true,
  toggleLight: () =>
    set((state) => ({ isLightEnabled: !state.isLightEnabled })),
}));

// ----------------

// Стор для управления камерой на сцене
type CameraControlStore = {
  isCameraControlEnabled: boolean;
  toggleCameraControl: () => void;
};

export const useCameraControl = create<CameraControlStore>((set) => ({
  isCameraControlEnabled: true,
  toggleCameraControl: () =>
    set((state) => ({ isCameraControlEnabled: !state.isCameraControlEnabled })),
}));

// ----------------

// стор для управления перспективной камерой
type PerspectiveCameraControlProps = {
  isPerspectiveCameraControlEnabled: boolean;
  togglePerspectiveCameraControl: () => void;
};

export const usePerspectiveCameraControl =
  create<PerspectiveCameraControlProps>((set) => ({
    isPerspectiveCameraControlEnabled: true,
    togglePerspectiveCameraControl: () =>
      set((state) => ({
        isPerspectiveCameraControlEnabled:
          !state.isPerspectiveCameraControlEnabled,
      })),
  }));

// ----------------

// Стор для управления возможностью зума
type ZoomControlStore = {
  isZoomEnabled: boolean;
  toggleZoom: () => void;
};

export const useZoomControl = create<ZoomControlStore>((set) => ({
  isZoomEnabled: true,
  toggleZoom: () => set((state) => ({ isZoomEnabled: !state.isZoomEnabled })),
}));