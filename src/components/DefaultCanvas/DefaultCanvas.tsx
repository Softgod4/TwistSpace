import { Canvas } from "@react-three/fiber";
import { FC } from "react";

interface RenderModelProps {
  children: React.ReactNode;
}

const DefaultCanvas: FC<RenderModelProps> = ({ children }) => {
  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Canvas camera={{ position: [2, 1, 2], fov: 90, near: 2.3, far: 3.5 }}>
        {children}
      </Canvas>
      ;
    </div>
  );
};

export default DefaultCanvas;
