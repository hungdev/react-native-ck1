import React from "react";
import { View, Text } from "react-native";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import allReducer from "./src/reducers";

import AppContainer from "./src/appNavigation/Router";

let store = createStore(allReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
