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
      <Canvas camera={{ position: [0, 0, 3] }}>
        {children}
      </Canvas>
    </div>
  );
};

export default DefaultCanvas;
