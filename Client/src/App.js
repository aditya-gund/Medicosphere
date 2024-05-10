import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetStarted from "./Presentation/Screens/GetStarted/GetStarted";
import { RedirectNotFound } from "./Presentation/Screens/NotFound/NotFound";
import Home from "./Presentation/Screens/Home/Home";
import { UserContextProvider } from "./Presentation/Context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GetStarted />} />
            <Route path="/Home/*" element={<Home />} />
            <Route path="/*" element={<RedirectNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserContextProvider>
  );
}

export default App;
