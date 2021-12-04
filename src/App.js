import logo from "./logo.svg";
import "./App.css";
import Approuter from "./route/router";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Approuter />
      </Provider>
    </div>
  );
}

export default App;
