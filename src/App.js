import { Route, Switch } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import "./Style/App.css";

function App() {
  return (
    <>
      <Switch>
        <Route path={"*"} exact>
          <MainLayout>
            <Home />
          </MainLayout>
        </Route>
      </Switch>
    </>
  );
}

export default App;
