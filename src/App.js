/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import MainNavigator from './navigation/mainNavigator';
import { Provider } from "react-redux";
import store from "./redux/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
  );
}

export default App;
