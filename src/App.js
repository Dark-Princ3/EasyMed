/* eslint-disable */
import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';

const App = () => {
  const routing = useRoutes(routes);

  return (
  	<FirebaseDatabaseProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
    </FirebaseDatabaseProvider>
  );
};

export default App;
