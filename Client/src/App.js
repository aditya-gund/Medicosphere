import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetStarted from "./Presentation/Screens/GetStarted/GetStarted";
import NotFound from "./Presentation/Screens/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
