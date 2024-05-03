import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetStarted from "./Presentation/Screens/GetStarted/GetStarted";
import { RedirectNotFound } from "./Presentation/Screens/NotFound/NotFound";
import Home from "./Presentation/Screens/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/Home/*" element={<Home />} />
          <Route path="/*" element={<RedirectNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
