import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "../styledComponents/theme";
import GlobalStyles from "../styledComponents/GlobalStyles";
import Dashboard from "../compontents/Dashboard/Dashboard";

export default () => (
  <Router>
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Switch>
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </div>
    </ThemeProvider>
  </Router>
);
