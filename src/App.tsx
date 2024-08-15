import { FC } from "react";
import RenderModel from "./components/RenderModel/RenderModel";
import DefaultCanvas from "./components/DefaultCanvas/DefaultCanvas";

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  return (
    <div>
      <p
        style={{
          fontSize: 51,
        }}
      >
        Marat gay
      </p>
      <DefaultCanvas>
        <RenderModel />
      </DefaultCanvas>
    </div>
  );
};

export default App;
