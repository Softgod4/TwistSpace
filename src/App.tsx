import { FC } from "react";
import RenderModel from "./components/RenderModel/RenderModel";
import DefaultCanvas from "./components/DefaultCanvas/DefaultCanvas";
import ControlPanel from "./components/ControlPanel/ControlPanel";
import { Route, Switch } from "wouter";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  return (
    <>
      <Switch>
        <Route
          path="/"
          component={() => (
            <>
              <ControlPanel />
              <DefaultCanvas>
                <RenderModel />
              </DefaultCanvas>
            </>
          )}
        />
      </Switch>
      <Route path="/:rest*" component={ErrorPage} />
    </>
  );
};

export default App;
