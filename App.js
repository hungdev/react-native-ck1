import React from "react";
import { View, Text } from "react-native";

import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducer from "./src/reducers";

import AppContainer from "./src/appNavigation/Router";

let store = createStore(allReducer);

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
