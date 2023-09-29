import { createRoot } from "react-dom/client";
import App from "./App";
// Router
import { BrowserRouter as Router } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./app/store";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
