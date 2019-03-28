import React from "react";
import { render } from "react-dom";
import { mockFetch } from "./vanilla";
import { Provider } from "react-redux";
import store from "./redux/store";
import Main from "./components/main";
import { UPDATE_DATA } from "./redux/modules/data/actions";

mockFetch(true)
  .then(response => {
    const responseData = response;
    console.log(responseData);
    if (responseData.status === "FAILURE") {
      console.log("error: ", responseData);
    } else {
      console.log("success: ", responseData);
      store.dispatch({
        type: UPDATE_DATA
        // payload: responseData
      });
    }
  })
  .catch(err => {
    console.log("error in catch: ", err);
  });

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);
