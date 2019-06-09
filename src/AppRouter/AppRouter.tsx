import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "../styledComponents/theme";
import Dashboard from "../compontents/Dashboard/Dashboard";

export default () => (
  <Router>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </ThemeProvider>
  </Router>
);
