/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import { Router } from './src/routes';


function App(): JSX.Element {
  return (

    <Provider
    store={store}
    >
      <Router />
    </Provider>
  );
}

export default App;
