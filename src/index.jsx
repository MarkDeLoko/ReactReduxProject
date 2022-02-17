import './index.less'
import React from "react";
import {render} from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {persistor, store} from "./Redux/store";
import {BrowserRouter} from "react-router-dom";
import {Loader} from "./Components/Loader";
import {PersistGate} from "redux-persist/integration/react";


render(
  <Provider store={store}>
    <PersistGate loading={<Loader/>} persistor={persistor}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </PersistGate>

  </Provider>,

  document.getElementById("root")
)
;