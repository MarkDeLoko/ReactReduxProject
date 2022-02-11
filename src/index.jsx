import './index.less'
import React from "react";
import {render} from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./Redux/reducers/rootReducer";
import {BrowserRouter} from "react-router-dom";


render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);