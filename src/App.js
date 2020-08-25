import React, { useEffect } from "react";
import "./style.css";
import AppContainer from "./components/AppContainer";
import { Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const pageNotFound = () => {
    return <h1>page not found</h1>;
  };
  return (
    <Provider store={store}>
      <>
        <header>
          <p>
            <Link to="/SpacexHistory">History</Link>
          </p>
          <p>
            <Link to="/Payload">Payload</Link>
          </p>
        </header>
        <div className="app-container">
          <main>
            <Switch>
              <Route exact path="/SpacexHistory" component={AppContainer} />
              <Route exact path="/Payload" component={AppContainer} />
            </Switch>
          </main>
        </div>
      </>
    </Provider>
  );
}

export default App;
