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
            <div>
              <ControlPanel />
              <DefaultCanvas>
                <RenderModel />
              </DefaultCanvas>
            </div>
          )}
        />
      </Switch>
      <Route path="/error" component={ErrorPage} />
    </>
  );
};

export default App;
