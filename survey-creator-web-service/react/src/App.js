import * as React from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { SurveyListWidget } from "./SurveyListWidget";
import { SurveyCreatorWidget } from "./SurveyCreatorWidget";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App__header">
          <Link to="/">
            <h1>SurveyJS service React example</h1>
          </Link>
        </div>
        <Switch>
          <Route exact path="/" component={SurveyListWidget} />
          <Route
            exact
            path="/editsurvey/:id"
            render={(props) => (
              <SurveyCreatorWidget id={props.match.params.id} />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
