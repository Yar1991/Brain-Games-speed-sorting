import { render } from "preact";
import App from "./app";
import GlobalStyles from "./globalStyles";
import { GlobalContext } from "./GlobalContext";

render(
  <>
    <GlobalContext>
      <GlobalStyles />
      <App />
    </GlobalContext>
  </>,
  document.getElementById("app")
);
