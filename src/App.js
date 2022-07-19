import { Route, Switch } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import Login from "./Pages/LoginPage";
import PostPage from "./Pages/PostPage";
import "./Style/App.css";

function App() {
  return (
    <>
      <Switch>
        <Route path={"/"} exact>
          <MainLayout>
            <Home />
          </MainLayout>
        </Route>
        <Route path={"/posts/:id"}>
          <MainLayout>
            <PostPage />
          </MainLayout>
        </Route>
        <Route path={"/welcome"}>
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default App;
