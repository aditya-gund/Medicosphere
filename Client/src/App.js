import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetStarted from "./Presentation/Screens/GetStarted/GetStarted";
import { RedirectNotFound } from "./Presentation/Screens/NotFound/NotFound";
import Home from "./Presentation/Screens/Home/Home";
// import { UserContextProvider } from "./Presentation/Context/UserContext";
import { Provider } from "react-redux";
import store from "./store";
import Modal from "./Presentation/Modals/Modal";

function App() {
  return (
    <Provider store={store}>
      {/* <UserContextProvider> */}
        <div className="App">
          <BrowserRouter>
          <Modal />
            <Routes>
              <Route path="/" element={<GetStarted />} />
              <Route path="/home/*" element={<Home />} />
              <Route path="/*" element={<RedirectNotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      {/* </UserContextProvider> */}
    </Provider>
  );
}

export default App;
