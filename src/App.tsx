import { FC } from "react";
import RenderModel from "./components/RenderModel/RenderModel";
import DefaultCanvas from "./components/DefaultCanvas/DefaultCanvas";

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  return (
    <DefaultCanvas>
      <RenderModel />
    </DefaultCanvas>
  );
};

export default App;
